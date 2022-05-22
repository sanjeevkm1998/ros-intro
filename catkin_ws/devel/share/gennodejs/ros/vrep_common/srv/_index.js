
"use strict";

let simRosAuxiliaryConsoleShow = require('./simRosAuxiliaryConsoleShow.js')
let simRosSetFloatSignal = require('./simRosSetFloatSignal.js')
let simRosSetObjectQuaternion = require('./simRosSetObjectQuaternion.js')
let simRosGetVisionSensorDepthBuffer = require('./simRosGetVisionSensorDepthBuffer.js')
let simRosGetDistanceHandle = require('./simRosGetDistanceHandle.js')
let simRosGetVisionSensorImage = require('./simRosGetVisionSensorImage.js')
let simRosGetLastErrors = require('./simRosGetLastErrors.js')
let simRosStartSimulation = require('./simRosStartSimulation.js')
let simRosLoadUI = require('./simRosLoadUI.js')
let simRosGetIntegerParameter = require('./simRosGetIntegerParameter.js')
let simRosCallScriptFunction = require('./simRosCallScriptFunction.js')
let simRosGetStringParameter = require('./simRosGetStringParameter.js')
let simRosGetDialogInput = require('./simRosGetDialogInput.js')
let simRosGetCollectionHandle = require('./simRosGetCollectionHandle.js')
let simRosSetUISlider = require('./simRosSetUISlider.js')
let simRosPauseSimulation = require('./simRosPauseSimulation.js')
let simRosStopSimulation = require('./simRosStopSimulation.js')
let simRosGetBooleanParameter = require('./simRosGetBooleanParameter.js')
let simRosReadDistance = require('./simRosReadDistance.js')
let simRosGetJointMatrix = require('./simRosGetJointMatrix.js')
let simRosGetFloatSignal = require('./simRosGetFloatSignal.js')
let simRosLoadModel = require('./simRosLoadModel.js')
let simRosAuxiliaryConsoleOpen = require('./simRosAuxiliaryConsoleOpen.js')
let simRosSetObjectFloatParameter = require('./simRosSetObjectFloatParameter.js')
let simRosSetUIButtonProperty = require('./simRosSetUIButtonProperty.js')
let simRosSetIntegerParameter = require('./simRosSetIntegerParameter.js')
let simRosGetUISlider = require('./simRosGetUISlider.js')
let simRosSetJointTargetPosition = require('./simRosSetJointTargetPosition.js')
let simRosSetJointState = require('./simRosSetJointState.js')
let simRosSetSphericalJointMatrix = require('./simRosSetSphericalJointMatrix.js')
let simRosEnablePublisher = require('./simRosEnablePublisher.js')
let simRosAuxiliaryConsolePrint = require('./simRosAuxiliaryConsolePrint.js')
let simRosGetStringSignal = require('./simRosGetStringSignal.js')
let simRosEndDialog = require('./simRosEndDialog.js')
let simRosSetObjectSelection = require('./simRosSetObjectSelection.js')
let simRosLoadScene = require('./simRosLoadScene.js')
let simRosGetUIEventButton = require('./simRosGetUIEventButton.js')
let simRosReadProximitySensor = require('./simRosReadProximitySensor.js')
let simRosGetObjectPose = require('./simRosGetObjectPose.js')
let simRosSetObjectPose = require('./simRosSetObjectPose.js')
let simRosClearIntegerSignal = require('./simRosClearIntegerSignal.js')
let simRosClearFloatSignal = require('./simRosClearFloatSignal.js')
let simRosSetBooleanParameter = require('./simRosSetBooleanParameter.js')
let simRosGetObjectHandle = require('./simRosGetObjectHandle.js')
let simRosSetUIButtonLabel = require('./simRosSetUIButtonLabel.js')
let simRosAddStatusbarMessage = require('./simRosAddStatusbarMessage.js')
let simRosSetJointTargetVelocity = require('./simRosSetJointTargetVelocity.js')
let simRosSynchronousTrigger = require('./simRosSynchronousTrigger.js')
let simRosSetArrayParameter = require('./simRosSetArrayParameter.js')
let simRosGetObjectParent = require('./simRosGetObjectParent.js')
let simRosAppendStringSignal = require('./simRosAppendStringSignal.js')
let simRosSetObjectPosition = require('./simRosSetObjectPosition.js')
let simRosSetVisionSensorImage = require('./simRosSetVisionSensorImage.js')
let simRosClearStringSignal = require('./simRosClearStringSignal.js')
let simRosGetCollisionHandle = require('./simRosGetCollisionHandle.js')
let simRosGetObjectSelection = require('./simRosGetObjectSelection.js')
let simRosGetDialogResult = require('./simRosGetDialogResult.js')
let simRosDisableSubscriber = require('./simRosDisableSubscriber.js')
let simRosRemoveUI = require('./simRosRemoveUI.js')
let simRosSetFloatingParameter = require('./simRosSetFloatingParameter.js')
let simRosSetObjectParent = require('./simRosSetObjectParent.js')
let simRosEraseFile = require('./simRosEraseFile.js')
let simRosDisplayDialog = require('./simRosDisplayDialog.js')
let simRosGetUIButtonProperty = require('./simRosGetUIButtonProperty.js')
let simRosGetObjectChild = require('./simRosGetObjectChild.js')
let simRosCloseScene = require('./simRosCloseScene.js')
let simRosCreateDummy = require('./simRosCreateDummy.js')
let simRosSetStringSignal = require('./simRosSetStringSignal.js')
let simRosDisablePublisher = require('./simRosDisablePublisher.js')
let simRosGetUIHandle = require('./simRosGetUIHandle.js')
let simRosSetIntegerSignal = require('./simRosSetIntegerSignal.js')
let simRosGetObjectGroupData = require('./simRosGetObjectGroupData.js')
let simRosGetIntegerSignal = require('./simRosGetIntegerSignal.js')
let simRosGetModelProperty = require('./simRosGetModelProperty.js')
let simRosSynchronous = require('./simRosSynchronous.js')
let simRosSetJointPosition = require('./simRosSetJointPosition.js')
let simRosRemoveModel = require('./simRosRemoveModel.js')
let simRosSetJointForce = require('./simRosSetJointForce.js')
let simRosReadCollision = require('./simRosReadCollision.js')
let simRosGetObjects = require('./simRosGetObjects.js')
let simRosGetInfo = require('./simRosGetInfo.js')
let simRosGetAndClearStringSignal = require('./simRosGetAndClearStringSignal.js')
let simRosGetArrayParameter = require('./simRosGetArrayParameter.js')
let simRosTransferFile = require('./simRosTransferFile.js')
let simRosEnableSubscriber = require('./simRosEnableSubscriber.js')
let simRosAuxiliaryConsoleClose = require('./simRosAuxiliaryConsoleClose.js')
let simRosReadForceSensor = require('./simRosReadForceSensor.js')
let simRosGetJointState = require('./simRosGetJointState.js')
let simRosGetFloatingParameter = require('./simRosGetFloatingParameter.js')
let simRosGetObjectIntParameter = require('./simRosGetObjectIntParameter.js')
let simRosCopyPasteObjects = require('./simRosCopyPasteObjects.js')
let simRosBreakForceSensor = require('./simRosBreakForceSensor.js')
let simRosRemoveObject = require('./simRosRemoveObject.js')
let simRosGetObjectFloatParameter = require('./simRosGetObjectFloatParameter.js')
let simRosSetModelProperty = require('./simRosSetModelProperty.js')
let simRosSetObjectIntParameter = require('./simRosSetObjectIntParameter.js')
let simRosReadVisionSensor = require('./simRosReadVisionSensor.js')

module.exports = {
  simRosAuxiliaryConsoleShow: simRosAuxiliaryConsoleShow,
  simRosSetFloatSignal: simRosSetFloatSignal,
  simRosSetObjectQuaternion: simRosSetObjectQuaternion,
  simRosGetVisionSensorDepthBuffer: simRosGetVisionSensorDepthBuffer,
  simRosGetDistanceHandle: simRosGetDistanceHandle,
  simRosGetVisionSensorImage: simRosGetVisionSensorImage,
  simRosGetLastErrors: simRosGetLastErrors,
  simRosStartSimulation: simRosStartSimulation,
  simRosLoadUI: simRosLoadUI,
  simRosGetIntegerParameter: simRosGetIntegerParameter,
  simRosCallScriptFunction: simRosCallScriptFunction,
  simRosGetStringParameter: simRosGetStringParameter,
  simRosGetDialogInput: simRosGetDialogInput,
  simRosGetCollectionHandle: simRosGetCollectionHandle,
  simRosSetUISlider: simRosSetUISlider,
  simRosPauseSimulation: simRosPauseSimulation,
  simRosStopSimulation: simRosStopSimulation,
  simRosGetBooleanParameter: simRosGetBooleanParameter,
  simRosReadDistance: simRosReadDistance,
  simRosGetJointMatrix: simRosGetJointMatrix,
  simRosGetFloatSignal: simRosGetFloatSignal,
  simRosLoadModel: simRosLoadModel,
  simRosAuxiliaryConsoleOpen: simRosAuxiliaryConsoleOpen,
  simRosSetObjectFloatParameter: simRosSetObjectFloatParameter,
  simRosSetUIButtonProperty: simRosSetUIButtonProperty,
  simRosSetIntegerParameter: simRosSetIntegerParameter,
  simRosGetUISlider: simRosGetUISlider,
  simRosSetJointTargetPosition: simRosSetJointTargetPosition,
  simRosSetJointState: simRosSetJointState,
  simRosSetSphericalJointMatrix: simRosSetSphericalJointMatrix,
  simRosEnablePublisher: simRosEnablePublisher,
  simRosAuxiliaryConsolePrint: simRosAuxiliaryConsolePrint,
  simRosGetStringSignal: simRosGetStringSignal,
  simRosEndDialog: simRosEndDialog,
  simRosSetObjectSelection: simRosSetObjectSelection,
  simRosLoadScene: simRosLoadScene,
  simRosGetUIEventButton: simRosGetUIEventButton,
  simRosReadProximitySensor: simRosReadProximitySensor,
  simRosGetObjectPose: simRosGetObjectPose,
  simRosSetObjectPose: simRosSetObjectPose,
  simRosClearIntegerSignal: simRosClearIntegerSignal,
  simRosClearFloatSignal: simRosClearFloatSignal,
  simRosSetBooleanParameter: simRosSetBooleanParameter,
  simRosGetObjectHandle: simRosGetObjectHandle,
  simRosSetUIButtonLabel: simRosSetUIButtonLabel,
  simRosAddStatusbarMessage: simRosAddStatusbarMessage,
  simRosSetJointTargetVelocity: simRosSetJointTargetVelocity,
  simRosSynchronousTrigger: simRosSynchronousTrigger,
  simRosSetArrayParameter: simRosSetArrayParameter,
  simRosGetObjectParent: simRosGetObjectParent,
  simRosAppendStringSignal: simRosAppendStringSignal,
  simRosSetObjectPosition: simRosSetObjectPosition,
  simRosSetVisionSensorImage: simRosSetVisionSensorImage,
  simRosClearStringSignal: simRosClearStringSignal,
  simRosGetCollisionHandle: simRosGetCollisionHandle,
  simRosGetObjectSelection: simRosGetObjectSelection,
  simRosGetDialogResult: simRosGetDialogResult,
  simRosDisableSubscriber: simRosDisableSubscriber,
  simRosRemoveUI: simRosRemoveUI,
  simRosSetFloatingParameter: simRosSetFloatingParameter,
  simRosSetObjectParent: simRosSetObjectParent,
  simRosEraseFile: simRosEraseFile,
  simRosDisplayDialog: simRosDisplayDialog,
  simRosGetUIButtonProperty: simRosGetUIButtonProperty,
  simRosGetObjectChild: simRosGetObjectChild,
  simRosCloseScene: simRosCloseScene,
  simRosCreateDummy: simRosCreateDummy,
  simRosSetStringSignal: simRosSetStringSignal,
  simRosDisablePublisher: simRosDisablePublisher,
  simRosGetUIHandle: simRosGetUIHandle,
  simRosSetIntegerSignal: simRosSetIntegerSignal,
  simRosGetObjectGroupData: simRosGetObjectGroupData,
  simRosGetIntegerSignal: simRosGetIntegerSignal,
  simRosGetModelProperty: simRosGetModelProperty,
  simRosSynchronous: simRosSynchronous,
  simRosSetJointPosition: simRosSetJointPosition,
  simRosRemoveModel: simRosRemoveModel,
  simRosSetJointForce: simRosSetJointForce,
  simRosReadCollision: simRosReadCollision,
  simRosGetObjects: simRosGetObjects,
  simRosGetInfo: simRosGetInfo,
  simRosGetAndClearStringSignal: simRosGetAndClearStringSignal,
  simRosGetArrayParameter: simRosGetArrayParameter,
  simRosTransferFile: simRosTransferFile,
  simRosEnableSubscriber: simRosEnableSubscriber,
  simRosAuxiliaryConsoleClose: simRosAuxiliaryConsoleClose,
  simRosReadForceSensor: simRosReadForceSensor,
  simRosGetJointState: simRosGetJointState,
  simRosGetFloatingParameter: simRosGetFloatingParameter,
  simRosGetObjectIntParameter: simRosGetObjectIntParameter,
  simRosCopyPasteObjects: simRosCopyPasteObjects,
  simRosBreakForceSensor: simRosBreakForceSensor,
  simRosRemoveObject: simRosRemoveObject,
  simRosGetObjectFloatParameter: simRosGetObjectFloatParameter,
  simRosSetModelProperty: simRosSetModelProperty,
  simRosSetObjectIntParameter: simRosSetObjectIntParameter,
  simRosReadVisionSensor: simRosReadVisionSensor,
};
