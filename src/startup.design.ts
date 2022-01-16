/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */

import { bootstrapModule } from "@paperbits/common";
import { PaperbitsDesigner } from "@paperbits/react/components/paperbitsDesigner";
import { createElement } from "react";
import * as ReactDOM from "react-dom";
import { DemoDesignModule } from "./modules/demo.design.module";
import "./polyfills";


bootstrapModule(new DemoDesignModule());

document.addEventListener("DOMContentLoaded", () => {
    const reactElement = createElement(PaperbitsDesigner);
    ReactDOM.render(reactElement, document.getElementById("app"));
 });

