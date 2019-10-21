(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[21],{

/***/ "./src/cast/cast_framework.ts":
/*!************************************!*\
  !*** ./src/cast/cast_framework.ts ***!
  \************************************/
/*! exports provided: castApiAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castApiAvailable", function() { return castApiAvailable; });
/* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/dom/load_resource */ "./src/common/dom/load_resource.ts");

var loadedPromise;
var castApiAvailable = function () {
    if (loadedPromise) {
        return loadedPromise;
    }
    loadedPromise = new Promise(function (resolve) {
        window.__onGCastApiAvailable = resolve;
    });
    // Any element with a specific ID will get set as a JS variable on window
    // This will override the cast SDK if the iconset is loaded afterwards.
    // Conflicting IDs will no longer mess with window, so we'll just append one.
    var el = document.createElement("div");
    el.id = "cast";
    document.body.append(el);
    Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"])("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1");
    return loadedPromise;
};


/***/ }),

/***/ "./src/cast/cast_manager.ts":
/*!**********************************!*\
  !*** ./src/cast/cast_manager.ts ***!
  \**********************************/
/*! exports provided: CastManager, getCastManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastManager", function() { return CastManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCastManager", function() { return getCastManager; });
/* harmony import */ var _cast_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast_framework */ "./src/cast/cast_framework.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/cast/const.ts");
/* harmony import */ var _dev_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev_const */ "./src/cast/dev_const.ts");
/* harmony import */ var _receiver_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receiver_messages */ "./src/cast/receiver_messages.ts");




var managerProm;
var CastManager = /** @class */ (function () {
    function CastManager(auth) {
        var _this = this;
        this._eventListeners = {};
        this.auth = auth;
        var context = this.castContext;
        context.setOptions({
            receiverApplicationId: _const__WEBPACK_IMPORTED_MODULE_1__["CAST_APP_ID"],
            // @ts-ignore
            autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
        });
        context.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, function (ev) { return _this._sessionStateChanged(ev); });
        context.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED, function (ev) { return _this._castStateChanged(ev); });
    }
    CastManager.prototype.addEventListener = function (event, listener) {
        var _this = this;
        if (!(event in this._eventListeners)) {
            this._eventListeners[event] = [];
        }
        this._eventListeners[event].push(listener);
        return function () {
            _this._eventListeners[event].splice(_this._eventListeners[event].indexOf(listener));
        };
    };
    Object.defineProperty(CastManager.prototype, "castConnectedToOurHass", {
        get: function () {
            return (this.status !== undefined &&
                this.auth !== undefined &&
                this.status.connected &&
                (this.status.hassUrl === this.auth.data.hassUrl ||
                    (_const__WEBPACK_IMPORTED_MODULE_1__["CAST_DEV"] && this.status.hassUrl === _dev_const__WEBPACK_IMPORTED_MODULE_2__["CAST_DEV_HASS_URL"])));
        },
        enumerable: true,
        configurable: true
    });
    CastManager.prototype.sendMessage = function (msg) {
        if (true) {
            console.log("Sending cast message", msg);
        }
        this.castSession.sendMessage(_const__WEBPACK_IMPORTED_MODULE_1__["CAST_NS"], msg);
    };
    Object.defineProperty(CastManager.prototype, "castState", {
        get: function () {
            return this.castContext.getCastState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CastManager.prototype, "castContext", {
        get: function () {
            return cast.framework.CastContext.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CastManager.prototype, "castSession", {
        get: function () {
            return this.castContext.getCurrentSession();
        },
        enumerable: true,
        configurable: true
    });
    CastManager.prototype.requestSession = function () {
        return this.castContext.requestSession();
    };
    CastManager.prototype._fireEvent = function (event) {
        for (var _i = 0, _a = this._eventListeners[event] || []; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    CastManager.prototype._receiveMessage = function (msg) {
        if (true) {
            console.log("Received cast message", msg);
        }
        if (msg.type === "receiver_status") {
            this.status = msg;
            this._fireEvent("connection-changed");
        }
    };
    CastManager.prototype._sessionStateChanged = function (ev) {
        if (true) {
            console.log("Cast session state changed", ev.sessionState);
        }
        // On Android, opening a new session always results in SESSION_RESUMED.
        // So treat both as the same.
        if (ev.sessionState === "SESSION_STARTED" ||
            ev.sessionState === "SESSION_RESUMED") {
            if (this.auth) {
                Object(_receiver_messages__WEBPACK_IMPORTED_MODULE_3__["castSendAuth"])(this, this.auth);
            }
            else {
                // Only do if no auth, as this is done as part of sendAuth.
                this.sendMessage({ type: "get_status" });
            }
            this._attachMessageListener();
        }
        else if (ev.sessionState === "SESSION_ENDED") {
            this.status = undefined;
            this._fireEvent("connection-changed");
        }
    };
    CastManager.prototype._castStateChanged = function (ev) {
        if (true) {
            console.log("Cast state changed", ev.castState);
        }
        this._fireEvent("state-changed");
    };
    CastManager.prototype._attachMessageListener = function () {
        var _this = this;
        var session = this.castSession;
        session.addMessageListener(_const__WEBPACK_IMPORTED_MODULE_1__["CAST_NS"], function (_ns, msg) {
            return _this._receiveMessage(JSON.parse(msg));
        });
    };
    return CastManager;
}());

var getCastManager = function (auth) {
    if (!managerProm) {
        managerProm = Object(_cast_framework__WEBPACK_IMPORTED_MODULE_0__["castApiAvailable"])().then(function (isAvailable) {
            if (!isAvailable) {
                throw new Error("No Cast API available");
            }
            return new CastManager(auth);
        });
    }
    return managerProm;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2FzdC9jYXN0X2ZyYW1ld29yay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FzdC9jYXN0X21hbmFnZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZEpTIH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vbG9hZF9yZXNvdXJjZVwiO1xuXG5sZXQgbG9hZGVkUHJvbWlzZTogUHJvbWlzZTxib29sZWFuPiB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGNhc3RBcGlBdmFpbGFibGUgPSAoKSA9PiB7XG4gIGlmIChsb2FkZWRQcm9taXNlKSB7XG4gICAgcmV0dXJuIGxvYWRlZFByb21pc2U7XG4gIH1cblxuICBsb2FkZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAod2luZG93IGFzIGFueSkuX19vbkdDYXN0QXBpQXZhaWxhYmxlID0gcmVzb2x2ZTtcbiAgfSk7XG4gIC8vIEFueSBlbGVtZW50IHdpdGggYSBzcGVjaWZpYyBJRCB3aWxsIGdldCBzZXQgYXMgYSBKUyB2YXJpYWJsZSBvbiB3aW5kb3dcbiAgLy8gVGhpcyB3aWxsIG92ZXJyaWRlIHRoZSBjYXN0IFNESyBpZiB0aGUgaWNvbnNldCBpcyBsb2FkZWQgYWZ0ZXJ3YXJkcy5cbiAgLy8gQ29uZmxpY3RpbmcgSURzIHdpbGwgbm8gbG9uZ2VyIG1lc3Mgd2l0aCB3aW5kb3csIHNvIHdlJ2xsIGp1c3QgYXBwZW5kIG9uZS5cbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5pZCA9IFwiY2FzdFwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChlbCk7XG5cbiAgbG9hZEpTKFxuICAgIFwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vY3YvanMvc2VuZGVyL3YxL2Nhc3Rfc2VuZGVyLmpzP2xvYWRDYXN0RnJhbWV3b3JrPTFcIlxuICApO1xuICByZXR1cm4gbG9hZGVkUHJvbWlzZTtcbn07XG4iLCJpbXBvcnQgeyBjYXN0QXBpQXZhaWxhYmxlIH0gZnJvbSBcIi4vY2FzdF9mcmFtZXdvcmtcIjtcbmltcG9ydCB7IENBU1RfQVBQX0lELCBDQVNUX05TLCBDQVNUX0RFViB9IGZyb20gXCIuL2NvbnN0XCI7XG5pbXBvcnQgeyBDQVNUX0RFVl9IQVNTX1VSTCB9IGZyb20gXCIuL2Rldl9jb25zdFwiO1xuaW1wb3J0IHtcbiAgY2FzdFNlbmRBdXRoLFxuICBIYXNzTWVzc2FnZSBhcyBSZWNlaXZlck1lc3NhZ2UsXG59IGZyb20gXCIuL3JlY2VpdmVyX21lc3NhZ2VzXCI7XG5pbXBvcnQge1xuICBTZXNzaW9uU3RhdGVFdmVudERhdGEsXG4gIENhc3RTdGF0ZUV2ZW50RGF0YSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbXBsaWNpdC1kZXBlbmRlbmNpZXNcbn0gZnJvbSBcImNocm9tZWNhc3QtY2FmLXJlY2VpdmVyL2Nhc3QuZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTZW5kZXJNZXNzYWdlLCBSZWNlaXZlclN0YXR1c01lc3NhZ2UgfSBmcm9tIFwiLi9zZW5kZXJfbWVzc2FnZXNcIjtcbmltcG9ydCB7IEF1dGggfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmxldCBtYW5hZ2VyUHJvbTogUHJvbWlzZTxDYXN0TWFuYWdlcj4gfCB1bmRlZmluZWQ7XG5cbnR5cGUgQ2FzdEV2ZW50TGlzdGVuZXIgPSAoKSA9PiB2b2lkO1xuXG4vKlxuR2VuZXJhbCBmbG93IG9mIENocm9tZWNhc3Q6XG5cbkNocm9tZWNhc3Qgc2Vzc2lvbnMgYXJlIHN0YXJ0ZWQgdmlhIHRoZSBDaHJvbWVjYXN0IGJ1dHRvbi4gV2hlbiBjbGlja2VkLCBzZXNzaW9uXG5zdGF0ZSBjaGFuZ2VzIHRvIHN0YXJ0ZWQuIFdlIHRoZW4gc2VuZCBhdXRoZW50aWNhdGlvbiwgd2hpY2ggd2lsbCBjYXVzZSB0aGVcbnJlY2VpdmVyIGFwcCB0byBzZW5kIGEgc3RhdHVzIHVwZGF0ZS5cblxuSWYgYSBzZXNzaW9uIGlzIGFscmVhZHkgYWN0aXZlLCB3ZSBxdWVyeSB0aGUgc3RhdHVzIHRvIHNlZSB3aGF0IGl0IGlzIHVwIHRvLiBJZlxuYSB1c2VyIHByZXNzZXMgdGhlIGNhc3QgYnV0dG9uIHdlIHNlbmQgYXV0aCBpZiBub3QgY29ubmVjdGVkIHlldCwgdGhlbiBzZW5kXG5jb21tYW5kIGFzIHVzdWFsLlxuKi9cblxuLyogdHNsaW50OmRpc2FibGU6bm8tY29uc29sZSAqL1xuXG50eXBlIENhc3RFdmVudCA9IFwiY29ubmVjdGlvbi1jaGFuZ2VkXCIgfCBcInN0YXRlLWNoYW5nZWRcIjtcblxuZXhwb3J0IGNsYXNzIENhc3RNYW5hZ2VyIHtcbiAgcHVibGljIGF1dGg/OiBBdXRoO1xuICAvLyBJZiB0aGUgY2FzdCBjb25uZWN0aW9uIGlzIGNvbm5lY3RlZCB0byBvdXIgSGFzcy5cbiAgcHVibGljIHN0YXR1cz86IFJlY2VpdmVyU3RhdHVzTWVzc2FnZTtcbiAgcHJpdmF0ZSBfZXZlbnRMaXN0ZW5lcnM6IHsgW2V2ZW50OiBzdHJpbmddOiBDYXN0RXZlbnRMaXN0ZW5lcltdIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihhdXRoPzogQXV0aCkge1xuICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FzdENvbnRleHQ7XG4gICAgY29udGV4dC5zZXRPcHRpb25zKHtcbiAgICAgIHJlY2VpdmVyQXBwbGljYXRpb25JZDogQ0FTVF9BUFBfSUQsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBhdXRvSm9pblBvbGljeTogY2hyb21lLmNhc3QuQXV0b0pvaW5Qb2xpY3kuT1JJR0lOX1NDT1BFRCxcbiAgICB9KTtcbiAgICBjb250ZXh0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBjYXN0LmZyYW1ld29yay5DYXN0Q29udGV4dEV2ZW50VHlwZS5TRVNTSU9OX1NUQVRFX0NIQU5HRUQsXG4gICAgICAoZXYpID0+IHRoaXMuX3Nlc3Npb25TdGF0ZUNoYW5nZWQoZXYpXG4gICAgKTtcbiAgICBjb250ZXh0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBjYXN0LmZyYW1ld29yay5DYXN0Q29udGV4dEV2ZW50VHlwZS5DQVNUX1NUQVRFX0NIQU5HRUQsXG4gICAgICAoZXYpID0+IHRoaXMuX2Nhc3RTdGF0ZUNoYW5nZWQoZXYpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBDYXN0RXZlbnQsIGxpc3RlbmVyOiBDYXN0RXZlbnRMaXN0ZW5lcikge1xuICAgIGlmICghKGV2ZW50IGluIHRoaXMuX2V2ZW50TGlzdGVuZXJzKSkge1xuICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0uc3BsaWNlKFxuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0uaW5kZXhPZihsaXN0ZW5lcilcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FzdENvbm5lY3RlZFRvT3VySGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0dXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5hdXRoICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRoaXMuc3RhdHVzLmNvbm5lY3RlZCAmJlxuICAgICAgKHRoaXMuc3RhdHVzLmhhc3NVcmwgPT09IHRoaXMuYXV0aC5kYXRhLmhhc3NVcmwgfHxcbiAgICAgICAgKENBU1RfREVWICYmIHRoaXMuc3RhdHVzLmhhc3NVcmwgPT09IENBU1RfREVWX0hBU1NfVVJMKSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHNlbmRNZXNzYWdlKG1zZzogUmVjZWl2ZXJNZXNzYWdlKSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBjYXN0IG1lc3NhZ2VcIiwgbXNnKTtcbiAgICB9XG4gICAgdGhpcy5jYXN0U2Vzc2lvbi5zZW5kTWVzc2FnZShDQVNUX05TLCBtc2cpO1xuICB9XG5cbiAgcHVibGljIGdldCBjYXN0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FzdENvbnRleHQuZ2V0Q2FzdFN0YXRlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhc3RDb250ZXh0KCkge1xuICAgIHJldHVybiBjYXN0LmZyYW1ld29yay5DYXN0Q29udGV4dC5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgcHVibGljIGdldCBjYXN0U2Vzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jYXN0Q29udGV4dC5nZXRDdXJyZW50U2Vzc2lvbigpITtcbiAgfVxuXG4gIHB1YmxpYyByZXF1ZXN0U2Vzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jYXN0Q29udGV4dC5yZXF1ZXN0U2Vzc2lvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlyZUV2ZW50KGV2ZW50OiBDYXN0RXZlbnQpIHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XSB8fCBbXSkge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZWNlaXZlTWVzc2FnZShtc2c6IFNlbmRlck1lc3NhZ2UpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBjYXN0IG1lc3NhZ2VcIiwgbXNnKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInJlY2VpdmVyX3N0YXR1c1wiKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IG1zZztcbiAgICAgIHRoaXMuX2ZpcmVFdmVudChcImNvbm5lY3Rpb24tY2hhbmdlZFwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uU3RhdGVDaGFuZ2VkKGV2OiBTZXNzaW9uU3RhdGVFdmVudERhdGEpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgY29uc29sZS5sb2coXCJDYXN0IHNlc3Npb24gc3RhdGUgY2hhbmdlZFwiLCBldi5zZXNzaW9uU3RhdGUpO1xuICAgIH1cbiAgICAvLyBPbiBBbmRyb2lkLCBvcGVuaW5nIGEgbmV3IHNlc3Npb24gYWx3YXlzIHJlc3VsdHMgaW4gU0VTU0lPTl9SRVNVTUVELlxuICAgIC8vIFNvIHRyZWF0IGJvdGggYXMgdGhlIHNhbWUuXG4gICAgaWYgKFxuICAgICAgZXYuc2Vzc2lvblN0YXRlID09PSBcIlNFU1NJT05fU1RBUlRFRFwiIHx8XG4gICAgICBldi5zZXNzaW9uU3RhdGUgPT09IFwiU0VTU0lPTl9SRVNVTUVEXCJcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmF1dGgpIHtcbiAgICAgICAgY2FzdFNlbmRBdXRoKHRoaXMsIHRoaXMuYXV0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPbmx5IGRvIGlmIG5vIGF1dGgsIGFzIHRoaXMgaXMgZG9uZSBhcyBwYXJ0IG9mIHNlbmRBdXRoLlxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKHsgdHlwZTogXCJnZXRfc3RhdHVzXCIgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hdHRhY2hNZXNzYWdlTGlzdGVuZXIoKTtcbiAgICB9IGVsc2UgaWYgKGV2LnNlc3Npb25TdGF0ZSA9PT0gXCJTRVNTSU9OX0VOREVEXCIpIHtcbiAgICAgIHRoaXMuc3RhdHVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KFwiY29ubmVjdGlvbi1jaGFuZ2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Nhc3RTdGF0ZUNoYW5nZWQoZXY6IENhc3RTdGF0ZUV2ZW50RGF0YSkge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNhc3Qgc3RhdGUgY2hhbmdlZFwiLCBldi5jYXN0U3RhdGUpO1xuICAgIH1cbiAgICB0aGlzLl9maXJlRXZlbnQoXCJzdGF0ZS1jaGFuZ2VkXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0YWNoTWVzc2FnZUxpc3RlbmVyKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSB0aGlzLmNhc3RTZXNzaW9uO1xuICAgIHNlc3Npb24uYWRkTWVzc2FnZUxpc3RlbmVyKENBU1RfTlMsIChfbnMsIG1zZykgPT5cbiAgICAgIHRoaXMuX3JlY2VpdmVNZXNzYWdlKEpTT04ucGFyc2UobXNnKSlcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDYXN0TWFuYWdlciA9IChhdXRoPzogQXV0aCkgPT4ge1xuICBpZiAoIW1hbmFnZXJQcm9tKSB7XG4gICAgbWFuYWdlclByb20gPSBjYXN0QXBpQXZhaWxhYmxlKCkudGhlbigoaXNBdmFpbGFibGUpID0+IHtcbiAgICAgIGlmICghaXNBdmFpbGFibGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gQ2FzdCBBUEkgYXZhaWxhYmxlXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBDYXN0TWFuYWdlcihhdXRoKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbWFuYWdlclByb207XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQW9CQTtBQU1BO0FBQUE7QUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=