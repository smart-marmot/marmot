module Marmot {
    import Box = Laya.Box;
    import Image = Laya.Image;

    export interface ListItemSetting {
        width: number;
        height: number;
        backgroundNormal: string;
        backgroundHighlight: string;
        imageX: number;
        imageY: number;
        imageWidth: number;
        imageHeight: number;
    }

    export class ListItem extends Box {

        public static WIDTH: number;
        public static HEIGHT: number;


        protected img: Image;

        constructor() {
            super();
            this.img = new Image();
            this.size(LibraryItem.WIDTH, LibraryItem.HEIGHT);

            this.addChild(this.img);
        }


        public setBackground(isHighlight: boolean, backgroundHighlight: string, backgroundNormal: string) {
            this.graphics.clear();
            if (isHighlight == true) {
                this.graphics.drawRect(0, 0, this.width, this.height, backgroundHighlight);
            }
            else {
                this.graphics.drawRect(0, 0, this.width, this.height, backgroundNormal);
            }
        }

        public setImg(src: string, x: number, y: number, width: number, height: number): void {
            this.img.skin = src;
            this.img.pos(x, y)
            this.img.size(width, height);
        }
    }
}