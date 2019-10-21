(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["external_auth"],{

/***/ "./src/external_app/external_auth.ts":
/*!*******************************************!*\
  !*** ./src/external_app/external_auth.ts ***!
  \*******************************************/
/*! exports provided: createExternalAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExternalAuth", function() { return createExternalAuth; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _external_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external_messaging */ "./src/external_app/external_messaging.ts");

/**
 * Auth class that connects to a native app for authentication.
 */


var CALLBACK_SET_TOKEN = "externalAuthSetToken";
var CALLBACK_REVOKE_TOKEN = "externalAuthRevokeToken";
if (!window.externalApp && !window.webkit) {
    throw new Error("External auth requires either externalApp or webkit defined on Window object.");
}
var ExternalAuth = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ExternalAuth, _super);
    function ExternalAuth(hassUrl) {
        return _super.call(this, {
            hassUrl: hassUrl,
            clientId: "",
            refresh_token: "",
            access_token: "",
            expires_in: 0,
            // This will trigger connection to do a refresh right away
            expires: 0,
        }) || this;
    }
    ExternalAuth.prototype.refreshAccessToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var callbackPayload, callbackPromise, tokens;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        callbackPayload = { callback: CALLBACK_SET_TOKEN };
                        callbackPromise = new Promise(function (resolve, reject) {
                            window[CALLBACK_SET_TOKEN] = function (success, data) {
                                return success ? resolve(data) : reject(data);
                            };
                        });
                        return [4 /*yield*/, 0];
                    case 1:
                        _a.sent();
                        if (window.externalApp) {
                            window.externalApp.getExternalAuth(JSON.stringify(callbackPayload));
                        }
                        else {
                            window.webkit.messageHandlers.getExternalAuth.postMessage(callbackPayload);
                        }
                        return [4 /*yield*/, callbackPromise];
                    case 2:
                        tokens = _a.sent();
                        this.data.access_token = tokens.access_token;
                        this.data.expires = tokens.expires_in * 1000 + Date.now();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExternalAuth.prototype.revoke = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var callbackPayload, callbackPromise;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        callbackPayload = { callback: CALLBACK_REVOKE_TOKEN };
                        callbackPromise = new Promise(function (resolve, reject) {
                            window[CALLBACK_REVOKE_TOKEN] = function (success, data) {
                                return success ? resolve(data) : reject(data);
                            };
                        });
                        return [4 /*yield*/, 0];
                    case 1:
                        _a.sent();
                        if (window.externalApp) {
                            window.externalApp.revokeExternalAuth(JSON.stringify(callbackPayload));
                        }
                        else {
                            window.webkit.messageHandlers.revokeExternalAuth.postMessage(callbackPayload);
                        }
                        return [4 /*yield*/, callbackPromise];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ExternalAuth;
}(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["Auth"]));
var createExternalAuth = function (hassUrl) {
    var auth = new ExternalAuth(hassUrl);
    if ((window.externalApp && window.externalApp.externalBus) ||
        (window.webkit && window.webkit.messageHandlers.externalBus)) {
        auth.external = new _external_messaging__WEBPACK_IMPORTED_MODULE_2__["ExternalMessaging"]();
        auth.external.attach();
    }
    return auth;
};


/***/ }),

/***/ "./src/external_app/external_events_forwarder.ts":
/*!*******************************************************!*\
  !*** ./src/external_app/external_events_forwarder.ts ***!
  \*******************************************************/
/*! exports provided: externalForwardConnectionEvents, externalForwardHaptics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalForwardConnectionEvents", function() { return externalForwardConnectionEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalForwardHaptics", function() { return externalForwardHaptics; });
var externalForwardConnectionEvents = function (bus) {
    window.addEventListener("connection-status", function (ev) {
        return bus.fireMessage({
            type: "connection-status",
            payload: { event: ev.detail },
        });
    });
};
var externalForwardHaptics = function (bus) {
    return window.addEventListener("haptic", function (ev) {
        return bus.fireMessage({ type: "haptic", payload: { hapticType: ev.detail } });
    });
};


/***/ }),

/***/ "./src/external_app/external_messaging.ts":
/*!************************************************!*\
  !*** ./src/external_app/external_messaging.ts ***!
  \************************************************/
/*! exports provided: ExternalMessaging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalMessaging", function() { return ExternalMessaging; });
/* harmony import */ var _external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external_events_forwarder */ "./src/external_app/external_events_forwarder.ts");

var CALLBACK_EXTERNAL_BUS = "externalBus";
var ExternalMessaging = /** @class */ (function () {
    function ExternalMessaging() {
        this.commands = {};
        this.cache = {};
        this.msgId = 0;
    }
    ExternalMessaging.prototype.attach = function () {
        var _this = this;
        Object(_external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__["externalForwardConnectionEvents"])(this);
        Object(_external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__["externalForwardHaptics"])(this);
        window[CALLBACK_EXTERNAL_BUS] = function (msg) { return _this.receiveMessage(msg); };
    };
    /**
     * Send message to external app that expects a response.
     * @param msg message to send
     */
    ExternalMessaging.prototype.sendMessage = function (msg) {
        var _this = this;
        var msgId = ++this.msgId;
        msg.id = msgId;
        this.fireMessage(msg);
        return new Promise(function (resolve, reject) {
            _this.commands[msgId] = { resolve: resolve, reject: reject };
        });
    };
    /**
     * Send message to external app without expecting a response.
     * @param msg message to send
     */
    ExternalMessaging.prototype.fireMessage = function (msg) {
        if (!msg.id) {
            msg.id = ++this.msgId;
        }
        this._sendExternal(msg);
    };
    ExternalMessaging.prototype.receiveMessage = function (msg) {
        if (true) {
            // tslint:disable-next-line: no-console
            console.log("Receiving message from external app", msg);
        }
        var pendingCmd = this.commands[msg.id];
        if (!pendingCmd) {
            // tslint:disable-next-line: no-console
            console.warn("Received unknown msg ID", msg.id);
            return;
        }
        if (msg.type === "result") {
            if (msg.success) {
                pendingCmd.resolve(msg.result);
            }
            else {
                pendingCmd.reject(msg.error);
            }
        }
    };
    ExternalMessaging.prototype._sendExternal = function (msg) {
        if (true) {
            // tslint:disable-next-line: no-console
            console.log("Sending message to external app", msg);
        }
        if (window.externalApp) {
            window.externalApp.externalBus(JSON.stringify(msg));
        }
        else {
            window.webkit.messageHandlers.externalBus.postMessage(msg);
        }
    };
    return ExternalMessaging;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWxfYXV0aC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9leHRlcm5hbF9hcHAvZXh0ZXJuYWxfYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZXJuYWxfYXBwL2V4dGVybmFsX2V2ZW50c19mb3J3YXJkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dGVybmFsX2FwcC9leHRlcm5hbF9tZXNzYWdpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBdXRoIGNsYXNzIHRoYXQgY29ubmVjdHMgdG8gYSBuYXRpdmUgYXBwIGZvciBhdXRoZW50aWNhdGlvbi5cbiAqL1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEV4dGVybmFsTWVzc2FnaW5nLCBJbnRlcm5hbE1lc3NhZ2UgfSBmcm9tIFwiLi9leHRlcm5hbF9tZXNzYWdpbmdcIjtcblxuY29uc3QgQ0FMTEJBQ0tfU0VUX1RPS0VOID0gXCJleHRlcm5hbEF1dGhTZXRUb2tlblwiO1xuY29uc3QgQ0FMTEJBQ0tfUkVWT0tFX1RPS0VOID0gXCJleHRlcm5hbEF1dGhSZXZva2VUb2tlblwiO1xuXG5pbnRlcmZhY2UgQmFzZVBheWxvYWQge1xuICBjYWxsYmFjazogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUmVmcmVzaFRva2VuUmVzcG9uc2Uge1xuICBhY2Nlc3NfdG9rZW46IHN0cmluZztcbiAgZXhwaXJlc19pbjogbnVtYmVyO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGV4dGVybmFsQXBwPzoge1xuICAgICAgZ2V0RXh0ZXJuYWxBdXRoKHBheWxvYWQ6IHN0cmluZyk7XG4gICAgICByZXZva2VFeHRlcm5hbEF1dGgocGF5bG9hZDogc3RyaW5nKTtcbiAgICAgIGV4dGVybmFsQnVzKHBheWxvYWQ6IHN0cmluZyk7XG4gICAgfTtcbiAgICB3ZWJraXQ/OiB7XG4gICAgICBtZXNzYWdlSGFuZGxlcnM6IHtcbiAgICAgICAgZ2V0RXh0ZXJuYWxBdXRoOiB7XG4gICAgICAgICAgcG9zdE1lc3NhZ2UocGF5bG9hZDogQmFzZVBheWxvYWQpO1xuICAgICAgICB9O1xuICAgICAgICByZXZva2VFeHRlcm5hbEF1dGg6IHtcbiAgICAgICAgICBwb3N0TWVzc2FnZShwYXlsb2FkOiBCYXNlUGF5bG9hZCk7XG4gICAgICAgIH07XG4gICAgICAgIGV4dGVybmFsQnVzOiB7XG4gICAgICAgICAgcG9zdE1lc3NhZ2UocGF5bG9hZDogSW50ZXJuYWxNZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxufVxuXG5pZiAoIXdpbmRvdy5leHRlcm5hbEFwcCAmJiAhd2luZG93LndlYmtpdCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJFeHRlcm5hbCBhdXRoIHJlcXVpcmVzIGVpdGhlciBleHRlcm5hbEFwcCBvciB3ZWJraXQgZGVmaW5lZCBvbiBXaW5kb3cgb2JqZWN0LlwiXG4gICk7XG59XG5cbmNsYXNzIEV4dGVybmFsQXV0aCBleHRlbmRzIEF1dGgge1xuICBwdWJsaWMgZXh0ZXJuYWw/OiBFeHRlcm5hbE1lc3NhZ2luZztcblxuICBjb25zdHJ1Y3RvcihoYXNzVXJsOiBzdHJpbmcpIHtcbiAgICBzdXBlcih7XG4gICAgICBoYXNzVXJsLFxuICAgICAgY2xpZW50SWQ6IFwiXCIsXG4gICAgICByZWZyZXNoX3Rva2VuOiBcIlwiLFxuICAgICAgYWNjZXNzX3Rva2VuOiBcIlwiLFxuICAgICAgZXhwaXJlc19pbjogMCxcbiAgICAgIC8vIFRoaXMgd2lsbCB0cmlnZ2VyIGNvbm5lY3Rpb24gdG8gZG8gYSByZWZyZXNoIHJpZ2h0IGF3YXlcbiAgICAgIGV4cGlyZXM6IDAsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVmcmVzaEFjY2Vzc1Rva2VuKCkge1xuICAgIGNvbnN0IGNhbGxiYWNrUGF5bG9hZCA9IHsgY2FsbGJhY2s6IENBTExCQUNLX1NFVF9UT0tFTiB9O1xuXG4gICAgY29uc3QgY2FsbGJhY2tQcm9taXNlID0gbmV3IFByb21pc2U8UmVmcmVzaFRva2VuUmVzcG9uc2U+KFxuICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3aW5kb3dbQ0FMTEJBQ0tfU0VUX1RPS0VOXSA9IChzdWNjZXNzLCBkYXRhKSA9PlxuICAgICAgICAgIHN1Y2Nlc3MgPyByZXNvbHZlKGRhdGEpIDogcmVqZWN0KGRhdGEpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBhd2FpdCAwO1xuXG4gICAgaWYgKHdpbmRvdy5leHRlcm5hbEFwcCkge1xuICAgICAgd2luZG93LmV4dGVybmFsQXBwLmdldEV4dGVybmFsQXV0aChKU09OLnN0cmluZ2lmeShjYWxsYmFja1BheWxvYWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LndlYmtpdCEubWVzc2FnZUhhbmRsZXJzLmdldEV4dGVybmFsQXV0aC5wb3N0TWVzc2FnZShcbiAgICAgICAgY2FsbGJhY2tQYXlsb2FkXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHRva2VucyA9IGF3YWl0IGNhbGxiYWNrUHJvbWlzZTtcblxuICAgIHRoaXMuZGF0YS5hY2Nlc3NfdG9rZW4gPSB0b2tlbnMuYWNjZXNzX3Rva2VuO1xuICAgIHRoaXMuZGF0YS5leHBpcmVzID0gdG9rZW5zLmV4cGlyZXNfaW4gKiAxMDAwICsgRGF0ZS5ub3coKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyByZXZva2UoKSB7XG4gICAgY29uc3QgY2FsbGJhY2tQYXlsb2FkID0geyBjYWxsYmFjazogQ0FMTEJBQ0tfUkVWT0tFX1RPS0VOIH07XG5cbiAgICBjb25zdCBjYWxsYmFja1Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3aW5kb3dbQ0FMTEJBQ0tfUkVWT0tFX1RPS0VOXSA9IChzdWNjZXNzLCBkYXRhKSA9PlxuICAgICAgICBzdWNjZXNzID8gcmVzb2x2ZShkYXRhKSA6IHJlamVjdChkYXRhKTtcbiAgICB9KTtcblxuICAgIGF3YWl0IDA7XG5cbiAgICBpZiAod2luZG93LmV4dGVybmFsQXBwKSB7XG4gICAgICB3aW5kb3cuZXh0ZXJuYWxBcHAucmV2b2tlRXh0ZXJuYWxBdXRoKEpTT04uc3RyaW5naWZ5KGNhbGxiYWNrUGF5bG9hZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cud2Via2l0IS5tZXNzYWdlSGFuZGxlcnMucmV2b2tlRXh0ZXJuYWxBdXRoLnBvc3RNZXNzYWdlKFxuICAgICAgICBjYWxsYmFja1BheWxvYWRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgYXdhaXQgY2FsbGJhY2tQcm9taXNlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFeHRlcm5hbEF1dGggPSAoaGFzc1VybDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGF1dGggPSBuZXcgRXh0ZXJuYWxBdXRoKGhhc3NVcmwpO1xuICBpZiAoXG4gICAgKHdpbmRvdy5leHRlcm5hbEFwcCAmJiB3aW5kb3cuZXh0ZXJuYWxBcHAuZXh0ZXJuYWxCdXMpIHx8XG4gICAgKHdpbmRvdy53ZWJraXQgJiYgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuZXh0ZXJuYWxCdXMpXG4gICkge1xuICAgIGF1dGguZXh0ZXJuYWwgPSBuZXcgRXh0ZXJuYWxNZXNzYWdpbmcoKTtcbiAgICBhdXRoLmV4dGVybmFsLmF0dGFjaCgpO1xuICB9XG4gIHJldHVybiBhdXRoO1xufTtcbiIsImltcG9ydCB7IEV4dGVybmFsTWVzc2FnaW5nIH0gZnJvbSBcIi4vZXh0ZXJuYWxfbWVzc2FnaW5nXCI7XG5cbmV4cG9ydCBjb25zdCBleHRlcm5hbEZvcndhcmRDb25uZWN0aW9uRXZlbnRzID0gKGJ1czogRXh0ZXJuYWxNZXNzYWdpbmcpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjb25uZWN0aW9uLXN0YXR1c1wiLCAoZXYpID0+XG4gICAgYnVzLmZpcmVNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwiY29ubmVjdGlvbi1zdGF0dXNcIixcbiAgICAgIHBheWxvYWQ6IHsgZXZlbnQ6IGV2LmRldGFpbCB9LFxuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZXh0ZXJuYWxGb3J3YXJkSGFwdGljcyA9IChidXM6IEV4dGVybmFsTWVzc2FnaW5nKSA9PlxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhcHRpY1wiLCAoZXYpID0+XG4gICAgYnVzLmZpcmVNZXNzYWdlKHsgdHlwZTogXCJoYXB0aWNcIiwgcGF5bG9hZDogeyBoYXB0aWNUeXBlOiBldi5kZXRhaWwgfSB9KVxuICApO1xuIiwiaW1wb3J0IHtcbiAgZXh0ZXJuYWxGb3J3YXJkQ29ubmVjdGlvbkV2ZW50cyxcbiAgZXh0ZXJuYWxGb3J3YXJkSGFwdGljcyxcbn0gZnJvbSBcIi4vZXh0ZXJuYWxfZXZlbnRzX2ZvcndhcmRlclwiO1xuXG5jb25zdCBDQUxMQkFDS19FWFRFUk5BTF9CVVMgPSBcImV4dGVybmFsQnVzXCI7XG5cbmludGVyZmFjZSBDb21tYW5kSW5GbGlnaHQge1xuICByZXNvbHZlOiAoZGF0YTogYW55KSA9PiB2b2lkO1xuICByZWplY3Q6IChlcnI6IEV4dGVybmFsRXJyb3IpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJuYWxNZXNzYWdlIHtcbiAgaWQ/OiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZD86IHVua25vd247XG59XG5cbmludGVyZmFjZSBFeHRlcm5hbEVycm9yIHtcbiAgY29kZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBFeHRlcm5hbE1lc3NhZ2VSZXN1bHQge1xuICBpZDogbnVtYmVyO1xuICB0eXBlOiBcInJlc3VsdFwiO1xuICBzdWNjZXNzOiB0cnVlO1xuICByZXN1bHQ6IHVua25vd247XG59XG5cbmludGVyZmFjZSBFeHRlcm5hbE1lc3NhZ2VSZXN1bHRFcnJvciB7XG4gIGlkOiBudW1iZXI7XG4gIHR5cGU6IFwicmVzdWx0XCI7XG4gIHN1Y2Nlc3M6IGZhbHNlO1xuICBlcnJvcjogRXh0ZXJuYWxFcnJvcjtcbn1cblxudHlwZSBFeHRlcm5hbE1lc3NhZ2UgPSBFeHRlcm5hbE1lc3NhZ2VSZXN1bHQgfCBFeHRlcm5hbE1lc3NhZ2VSZXN1bHRFcnJvcjtcblxuZXhwb3J0IGNsYXNzIEV4dGVybmFsTWVzc2FnaW5nIHtcbiAgcHVibGljIGNvbW1hbmRzOiB7IFttc2dJZDogbnVtYmVyXTogQ29tbWFuZEluRmxpZ2h0IH0gPSB7fTtcbiAgcHVibGljIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gIHB1YmxpYyBtc2dJZCA9IDA7XG5cbiAgcHVibGljIGF0dGFjaCgpIHtcbiAgICBleHRlcm5hbEZvcndhcmRDb25uZWN0aW9uRXZlbnRzKHRoaXMpO1xuICAgIGV4dGVybmFsRm9yd2FyZEhhcHRpY3ModGhpcyk7XG4gICAgd2luZG93W0NBTExCQUNLX0VYVEVSTkFMX0JVU10gPSAobXNnKSA9PiB0aGlzLnJlY2VpdmVNZXNzYWdlKG1zZyk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBtZXNzYWdlIHRvIGV4dGVybmFsIGFwcCB0aGF0IGV4cGVjdHMgYSByZXNwb25zZS5cbiAgICogQHBhcmFtIG1zZyBtZXNzYWdlIHRvIHNlbmRcbiAgICovXG4gIHB1YmxpYyBzZW5kTWVzc2FnZTxUPihtc2c6IEludGVybmFsTWVzc2FnZSk6IFByb21pc2U8VD4ge1xuICAgIGNvbnN0IG1zZ0lkID0gKyt0aGlzLm1zZ0lkO1xuICAgIG1zZy5pZCA9IG1zZ0lkO1xuXG4gICAgdGhpcy5maXJlTWVzc2FnZShtc2cpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29tbWFuZHNbbXNnSWRdID0geyByZXNvbHZlLCByZWplY3QgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIG1lc3NhZ2UgdG8gZXh0ZXJuYWwgYXBwIHdpdGhvdXQgZXhwZWN0aW5nIGEgcmVzcG9uc2UuXG4gICAqIEBwYXJhbSBtc2cgbWVzc2FnZSB0byBzZW5kXG4gICAqL1xuICBwdWJsaWMgZmlyZU1lc3NhZ2UobXNnOiBJbnRlcm5hbE1lc3NhZ2UpIHtcbiAgICBpZiAoIW1zZy5pZCkge1xuICAgICAgbXNnLmlkID0gKyt0aGlzLm1zZ0lkO1xuICAgIH1cbiAgICB0aGlzLl9zZW5kRXh0ZXJuYWwobXNnKTtcbiAgfVxuXG4gIHB1YmxpYyByZWNlaXZlTWVzc2FnZShtc2c6IEV4dGVybmFsTWVzc2FnZSkge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2aW5nIG1lc3NhZ2UgZnJvbSBleHRlcm5hbCBhcHBcIiwgbXNnKTtcbiAgICB9XG5cbiAgICBjb25zdCBwZW5kaW5nQ21kID0gdGhpcy5jb21tYW5kc1ttc2cuaWRdO1xuXG4gICAgaWYgKCFwZW5kaW5nQ21kKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihgUmVjZWl2ZWQgdW5rbm93biBtc2cgSURgLCBtc2cuaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJyZXN1bHRcIikge1xuICAgICAgaWYgKG1zZy5zdWNjZXNzKSB7XG4gICAgICAgIHBlbmRpbmdDbWQucmVzb2x2ZShtc2cucmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlbmRpbmdDbWQucmVqZWN0KG1zZy5lcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9zZW5kRXh0ZXJuYWwobXNnOiBJbnRlcm5hbE1lc3NhZ2UpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgbWVzc2FnZSB0byBleHRlcm5hbCBhcHBcIiwgbXNnKTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5leHRlcm5hbEFwcCkge1xuICAgICAgd2luZG93LmV4dGVybmFsQXBwLmV4dGVybmFsQnVzKEpTT04uc3RyaW5naWZ5KG1zZykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cud2Via2l0IS5tZXNzYWdlSGFuZGxlcnMuZXh0ZXJuYWxCdXMucG9zdE1lc3NhZ2UobXNnKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFrQ0E7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFFQTs7QUFBQTtBQUVBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFFQTs7QUFBQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0SEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBREE7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBa0NBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFvRUE7QUFsRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9