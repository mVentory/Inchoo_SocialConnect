<?php
class Inchoo_SocialConnect_Block_Form_Register extends Mage_Customer_Block_Form_Register
{
    protected function _prepareLayout()
    {
        // remove set page title
        return Mage_Directory_Block_Data::_prepareLayout();
    }
}
