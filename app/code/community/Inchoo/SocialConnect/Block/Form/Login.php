<?php
class Inchoo_SocialConnect_Block_Form_Login extends Mage_Customer_Block_Form_Login
{

    protected function _prepareLayout()
    {
        // remove set page title
        return Mage_Core_Block_Template::_prepareLayout();
    }

}
