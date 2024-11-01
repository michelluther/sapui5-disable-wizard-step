/*global QUnit*/
import Controller from "com/tts/wizardstepenablement/controller/wizard.controller";

QUnit.module("wizard Controller");

QUnit.test("I should test the wizard controller", function (assert: Assert) {
	const oAppController = new Controller("wizard");
	oAppController.onInit();
	assert.ok(oAppController);
});