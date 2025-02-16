/**
 * Created by Vidailhet on 17/11/15.
 */

(function (ionic) {
    angular.module('ionic.closePopup', ['ionic'])
        .service('IonicClosePopupService', [
            function () {
                var currentPopup;
                var htmlEl = angular.element(document.querySelector('html'));
                htmlEl.on('click', function (event) {
                    if (event.target.nodeName === 'HTML' || event.target.className.indexOf("backdrop") > -1) {
                        if (currentPopup) {
                            try {
                                currentPopup.close();
                            } catch ( e ) {}
                        }
                    }
                });

                this.register = function (popup) {
                    currentPopup = popup;
                }
            }
        ]);
})(window.ionic);
