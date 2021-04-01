/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppImg {
        "alt"?: string;
        "height"?: string;
        "sizes"?: string;
        "src"?: string;
        "srcset"?: string;
        "width"?: string;
    }
    interface AppLayout {
        "paneDisabled": any;
    }
    interface AppMenuItems {
        "level": number;
        "menuItems": any;
    }
    interface AppNav {
        "menuItems": any;
    }
    interface AppNavItems {
        "isChildren": any;
        "level": number;
        "menuItems": any;
    }
    interface AppNavSubMenuItems {
        "appPage": any;
        "hasChildren": any;
        "isChildren": any;
    }
    interface AppPage1 {
    }
    interface AppPage2 {
    }
    interface AppPage3 {
    }
    interface AppProfile {
    }
    interface AppRoot {
    }
    interface AppTreeView {
        "branches": any;
        "classNames": any;
        "level": number;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppImgElement extends Components.AppImg, HTMLStencilElement {
    }
    var HTMLAppImgElement: {
        prototype: HTMLAppImgElement;
        new (): HTMLAppImgElement;
    };
    interface HTMLAppLayoutElement extends Components.AppLayout, HTMLStencilElement {
    }
    var HTMLAppLayoutElement: {
        prototype: HTMLAppLayoutElement;
        new (): HTMLAppLayoutElement;
    };
    interface HTMLAppMenuItemsElement extends Components.AppMenuItems, HTMLStencilElement {
    }
    var HTMLAppMenuItemsElement: {
        prototype: HTMLAppMenuItemsElement;
        new (): HTMLAppMenuItemsElement;
    };
    interface HTMLAppNavElement extends Components.AppNav, HTMLStencilElement {
    }
    var HTMLAppNavElement: {
        prototype: HTMLAppNavElement;
        new (): HTMLAppNavElement;
    };
    interface HTMLAppNavItemsElement extends Components.AppNavItems, HTMLStencilElement {
    }
    var HTMLAppNavItemsElement: {
        prototype: HTMLAppNavItemsElement;
        new (): HTMLAppNavItemsElement;
    };
    interface HTMLAppNavSubMenuItemsElement extends Components.AppNavSubMenuItems, HTMLStencilElement {
    }
    var HTMLAppNavSubMenuItemsElement: {
        prototype: HTMLAppNavSubMenuItemsElement;
        new (): HTMLAppNavSubMenuItemsElement;
    };
    interface HTMLAppPage1Element extends Components.AppPage1, HTMLStencilElement {
    }
    var HTMLAppPage1Element: {
        prototype: HTMLAppPage1Element;
        new (): HTMLAppPage1Element;
    };
    interface HTMLAppPage2Element extends Components.AppPage2, HTMLStencilElement {
    }
    var HTMLAppPage2Element: {
        prototype: HTMLAppPage2Element;
        new (): HTMLAppPage2Element;
    };
    interface HTMLAppPage3Element extends Components.AppPage3, HTMLStencilElement {
    }
    var HTMLAppPage3Element: {
        prototype: HTMLAppPage3Element;
        new (): HTMLAppPage3Element;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTreeViewElement extends Components.AppTreeView, HTMLStencilElement {
    }
    var HTMLAppTreeViewElement: {
        prototype: HTMLAppTreeViewElement;
        new (): HTMLAppTreeViewElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-img": HTMLAppImgElement;
        "app-layout": HTMLAppLayoutElement;
        "app-menu-items": HTMLAppMenuItemsElement;
        "app-nav": HTMLAppNavElement;
        "app-nav-items": HTMLAppNavItemsElement;
        "app-nav-sub-menu-items": HTMLAppNavSubMenuItemsElement;
        "app-page-1": HTMLAppPage1Element;
        "app-page-2": HTMLAppPage2Element;
        "app-page-3": HTMLAppPage3Element;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-tree-view": HTMLAppTreeViewElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppImg {
        "alt"?: string;
        "height"?: string;
        /**
          * Emitted when the img fails to load
         */
        "onIonError"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the image has finished loading
         */
        "onIonImgDidLoad"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the img src has been set
         */
        "onIonImgWillLoad"?: (event: CustomEvent<void>) => void;
        "sizes"?: string;
        "src"?: string;
        "srcset"?: string;
        "width"?: string;
    }
    interface AppLayout {
        "paneDisabled"?: any;
    }
    interface AppMenuItems {
        "level"?: number;
        "menuItems"?: any;
    }
    interface AppNav {
        "menuItems"?: any;
    }
    interface AppNavItems {
        "isChildren"?: any;
        "level"?: number;
        "menuItems"?: any;
    }
    interface AppNavSubMenuItems {
        "appPage"?: any;
        "hasChildren"?: any;
        "isChildren"?: any;
    }
    interface AppPage1 {
    }
    interface AppPage2 {
    }
    interface AppPage3 {
    }
    interface AppProfile {
    }
    interface AppRoot {
    }
    interface AppTreeView {
        "branches"?: any;
        "classNames"?: any;
        "level"?: number;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-img": AppImg;
        "app-layout": AppLayout;
        "app-menu-items": AppMenuItems;
        "app-nav": AppNav;
        "app-nav-items": AppNavItems;
        "app-nav-sub-menu-items": AppNavSubMenuItems;
        "app-page-1": AppPage1;
        "app-page-2": AppPage2;
        "app-page-3": AppPage3;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-tree-view": AppTreeView;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-img": LocalJSX.AppImg & JSXBase.HTMLAttributes<HTMLAppImgElement>;
            "app-layout": LocalJSX.AppLayout & JSXBase.HTMLAttributes<HTMLAppLayoutElement>;
            "app-menu-items": LocalJSX.AppMenuItems & JSXBase.HTMLAttributes<HTMLAppMenuItemsElement>;
            "app-nav": LocalJSX.AppNav & JSXBase.HTMLAttributes<HTMLAppNavElement>;
            "app-nav-items": LocalJSX.AppNavItems & JSXBase.HTMLAttributes<HTMLAppNavItemsElement>;
            "app-nav-sub-menu-items": LocalJSX.AppNavSubMenuItems & JSXBase.HTMLAttributes<HTMLAppNavSubMenuItemsElement>;
            "app-page-1": LocalJSX.AppPage1 & JSXBase.HTMLAttributes<HTMLAppPage1Element>;
            "app-page-2": LocalJSX.AppPage2 & JSXBase.HTMLAttributes<HTMLAppPage2Element>;
            "app-page-3": LocalJSX.AppPage3 & JSXBase.HTMLAttributes<HTMLAppPage3Element>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-tree-view": LocalJSX.AppTreeView & JSXBase.HTMLAttributes<HTMLAppTreeViewElement>;
        }
    }
}
