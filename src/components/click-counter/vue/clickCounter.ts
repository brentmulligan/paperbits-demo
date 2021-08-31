import { Component, Computed, Prop } from "@paperbits/vue/decorators"
import template from "./clickCounter.html";
import { ClickCounterRuntime } from "./runtime";

@Component({
    template: template,
    selector: "click-counter-vue",
    components: {
        ClickCounterRuntime
    }
})
export class ClickCounter {
    public initialCount: number = 0;

    public childClass: string = "";

    constructor() {
    }
}