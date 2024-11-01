import Controller from "sap/ui/core/mvc/Controller";
import Wizard from "sap/m/Wizard";
import WizardStep from "sap/m/WizardStep";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace com.tts.wizardstepenablement.controller
 */
export default class wizard extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        const uiModel = new JSONModel({
            disableSecondStep: false
        });
        this.getView().setModel(uiModel, "ui");
    }

    public toggleSecondStep():void {
    }
}