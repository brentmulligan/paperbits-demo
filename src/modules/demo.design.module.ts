/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */


import { IInjector, IInjectorModule } from "@paperbits/common/injection";
import { ConsoleLogger } from "@paperbits/common/logging";
import { OfflineModule } from "@paperbits/common/persistence/offline.module";
import { AnchorRouteHandler, HistoryRouteHandler } from "@paperbits/common/routing";
import { CoreDesignModule } from "@paperbits/core/core.design.module";
import { PopupDesignModule } from "@paperbits/core/popup";
import { SearchDesignModule } from "@paperbits/core/search/search.design.module";
import { EmailsDesignModule } from "@paperbits/emails/emails.design.module";
import { FormsDesignModule } from "@paperbits/forms/forms.design.module";
import { ProseMirrorModule } from "@paperbits/prosemirror/prosemirror.module";
import { ReactModule } from "@paperbits/react/react.module";
import { StylesDesignModule } from "@paperbits/styles/styles.design.module";
import { ClickCounterDesignModule } from "../components/click-counter/clickCounter.design.module";
import { HttpDataProvider } from "../persistence/httpDataProvider";
import { MemoryBlobStorage } from "../persistence/memoryBlobStorage";
import { MemoryObjectStorage } from "../persistence/memoryObjectStorage";
import { StaticRoleService } from "../user/staticRoleService";


export class DemoDesignModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bindModule(new CoreDesignModule());
        injector.bindModule(new FormsDesignModule());
        injector.bindModule(new EmailsDesignModule());
        injector.bindModule(new StylesDesignModule());
        injector.bindModule(new ProseMirrorModule());
        injector.bindModule(new ReactModule());
        injector.bindModule(new SearchDesignModule());
        injector.bindModule(new ClickCounterDesignModule());
        injector.bindModule(new PopupDesignModule());
        injector.bindSingleton("dataProvider", HttpDataProvider);
        injector.bindSingleton("blobStorage", MemoryBlobStorage);
        injector.bindSingleton("objectStorage", MemoryObjectStorage);
        injector.bindSingleton("roleService", StaticRoleService);
        injector.bindToCollection("autostart", HistoryRouteHandler);
        injector.bindToCollection("autostart", AnchorRouteHandler);
        injector.bindSingleton("logger", ConsoleLogger);

        /* Uncomment to enable Firebase module */
        // import { FirebaseModule } from "@paperbits/firebase/firebase.module";

        /* Uncomment to enable Firebase module */
        // injector.bindModule(new FirebaseModule());

        injector.bindModule(new OfflineModule({ autosave: false }));
    }
}