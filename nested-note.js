class NestedNote extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
            <style>
                :host {
                    display: inline;
                    --primary-color: #bbddbb;
                    --secondary-color: #cceecc;
                    --tertiary-color: #ddffdd;

                    /* 1. Pick up what the parent emitted. If none, use the base primary color */
                    --incoming-color: var(--parent-emitted-color, var(--tertiary-color));
                    
                    /* 2. Compute the background color for THIS level using a UNITLESS number (- 8) */
                    --current-bg: hsl(from var(--incoming-color) h s calc(l - 8));
                }

                .explanation {
                    display: block;
                    margin: 0.4em 0 0.4em 0.4em;
                    padding: 0.4em 0.7em;
                    border-radius: 4px;
                    width: fit-content;
                    
                    /* 3. Apply the safely calculated color */
                    background-color: var(--current-bg);

                    /* 4. Pass this level's background down to any nested children slotted inside */
                    --parent-emitted-color: var(--current-bg);
                }

                .explanation[hidden] {
                    display: none;
                }

                button {
                    display: inline;
                    font: inherit;
                    color: inherit;
                    background: hsl(from var(--current-bg) h s calc(l - 4));
                    border: none;
                    border-radius: 2px;
                    padding: 0;
                    cursor: pointer;

                    text-decoration: underline;
                    text-decoration-style: dotted;
                    text-decoration-color: #356ac3;
                    text-underline-offset: 3px;
                }

                button:hover {
                    background: var(--secondary-color);
                }

                button:focus-visible {
                    outline: 2px solid #356ac3;
                    outline-offset: 2px;
                    border-radius: 2px;
                }
            </style>

            <button
                type="button"
                aria-expanded="false"
            ></button>

            <div class="explanation" hidden>
                <slot></slot>
            </div>
        `;

        this.button = shadow.querySelector("button");
        this.explanation = shadow.querySelector(".explanation");
    }

    connectedCallback() {
        this.button.textContent = this.getAttribute("text") ?? "";
        this.button.addEventListener("click", this.toggle);
    }

    disconnectedCallback() {
        this.button.removeEventListener("click", this.toggle);
    }

    toggle = () => {
        const isOpen = !this.explanation.hidden;
        this.explanation.hidden = isOpen;
        this.button.setAttribute("aria-expanded", String(!isOpen));
    };

}

customElements.define("nested-note", NestedNote);
