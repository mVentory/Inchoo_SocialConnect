/**
* Inchoo
*
* NOTICE OF LICENSE
*
* This source file is subject to the Open Software License (OSL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/osl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@magentocommerce.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Please do not edit or add to this file if you wish to upgrade
* Magento or this extension to newer versions in the future.
** Inchoo *give their best to conform to
* "non-obtrusive, best Magento practices" style of coding.
* However,* Inchoo *guarantee functional accuracy of
* specific extension behavior. Additionally we take no responsibility
* for any possible issue(s) resulting from extension usage.
* We reserve the full right not to provide any kind of support for our free extensions.
* Thank you for your understanding.
*
* @category Inchoo
* @package SocialConnect
* @author Anatoly A. Kazantsev <tolik@mventory.com>
* @copyright Copyright (c) Inchoo (http://inchoo.net/)
* @license http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
*/

;(function($) {

var
    actionCssPrefix = 'inchoo-socialconnect-popup-action-',
    currentActionCss,
    $window,
    $background,
    $closeBtn;

function show (action) {
    if (!$background.hasClass('inchoo-socialconnect-popup-state-on')) {
        $background.addClass('inchoo-socialconnect-popup-state-on');

        $window.on('keyup.inchoo-socialconnect', function (event) {

            //Esc key is pressed
            if (event.which == 27)
                hide();
        });
    }

    if (currentActionCss)
        $background.removeClass(currentActionCss);

    currentActionCss = actionCssPrefix + action;

    $background.addClass(
        'inchoo-socialconnect-popup-state-on ' + currentActionCss
    );
}

function hide () {
    $window.off('keyup.inchoo-socialconnect');
    $background.removeClass('inchoo-socialconnect-popup-state-on');
}

window.inchooSocialConnectPopup = show;

$(function() {
    $window = $(window);
    $background = $('#inchoo-socialconnect-popup-backdrop');
    $closeBtn = $('#inchoo-socialconnect-popup-close');

    $background.on('click', function (event) {
        if (event.target === this)
            hide();
    });

    $closeBtn.on('click', hide);
});

})(jQuery);