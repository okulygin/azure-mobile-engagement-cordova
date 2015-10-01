
/*
 * Copyright (c) Microsoft Corporation.  All rights reserved.
 * Licensed under the MIT license. See License.txt in the project root for license information.
 */


module.exports = {

    pluginName : 'AzureEngagement',
    pluginVersion : '2.1.0',

    onOpenURL : function (_handler) {
        var _this = this;
        _this.openURLHandler  = _handler;
        cordova.exec(function( _url) {
            if (_url)
              _this.handleOpenURL(_url);
        }, undefined, _this.pluginName, 'checkRedirect', ['url'] );
    },

    onDataPushReceived : function(_handler) {
         var _this = this;
        _this.dataPushHandler = _handler;
        cordova.exec( undefined, undefined, _this.pluginName, 'checkRedirect', ['data'] );
    },

    handleOpenURL : function(_url) {
        if (this.openURLHandler) {
            this.openURLHandler(_url);
        }
    },
    
    handleDataPush : function(_category,_body) {

        if (this.dataPushHandler) {
            var decodedCategory = decodeURIComponent(_category);
            var decodedBody = decodeURIComponent(_body);
            this.dataPushHandler(decodedCategory,decodedBody);
        }
    },

    startActivity: function (_activityName,_extraInfos,_success,_failure) {
        cordova.exec(_success, _failure, this.pluginName, 'startActivity', [_activityName,JSON.stringify(_extraInfos)] );
    },

    endActivity: function (_success,_failure) {
        cordova.exec(_success, _failure, this.pluginName, 'endActivity', [] );
    },

    sendAppInfo: function (_appInfos,_success,_failure) {
        cordova.exec(_success,_failure, this.pluginName, 'sendAppInfo', [JSON.stringify(_appInfos)] );
    },

    sendEvent: function (_eventName,_extraInfos,_success,_failure) {
        cordova.exec(_success,_failure, this.pluginName, 'sendEvent', [_eventName,JSON.stringify(_extraInfos)] );
    },

    startJob: function (_jobName,_extraInfos,_success,_failure) {
        cordova.exec(_success,_failure, this.pluginName, 'startJob',[_jobName, JSON.stringify(_extraInfos)] );
    },

    endJob: function (_jobName,_success,_failure) {
        cordova.exec(_success,_failure, this.pluginName, 'endJob', [_jobName] );
    },

    getStatus: function (_success,_failure) {
        cordova.exec(_success,_failure, this.pluginName, 'getStatus', [] );
    },

    registerForPushNotification: function (_success,_failure) {
        cordova.exec(_success,_failure, this.pluginName, 'registerForPushNotification', [] );
    },

};


