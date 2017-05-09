module Marmot {
    import Event = Laya.Event;
    export interface BackgroundLibraryDialogSetting extends LibraryDialogSetting {

    }

    export class BackgroundLibraryDialog extends LibraryDialog {
        constructor(backgroundLibraryDialogSetting: BackgroundLibraryDialogSetting, libraryDialogItemSetting:LibraryDialogItemSetting) {
            super(backgroundLibraryDialogSetting, libraryDialogItemSetting);
        }

        protected initializeLibrayItems(): void {
            this.list.array = [
                "materials/bg_2.jpg",
                "res/pics/bg_dadishu.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg"
            ];
            this.list.refresh();
        }
        protected onClose(e: Event): void {
            if (e.target.name == Dialog.OK) {
                let ide: IDE = IDE.getIDE();
                let item = this.list.selectedItem;
                ide.stageArea.addCostume(item);
                ide.backgroundMaterialList.initializeMaterialItems();
            }
        }
    }
}