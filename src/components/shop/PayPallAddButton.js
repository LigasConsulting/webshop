import React from 'react'

const PayPallAddButton = ({colour,buttonId}) => {
    return (
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value={buttonId}/>
            <input type="hidden" name="on0" value="Variation"/>
            <input type="hidden" name="os0" value={colour}/>
            <input type="hidden" name="currency_code" value="GBP"/>
            <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif"
                   border="0"
                   name="submit"
                   alt="PayPal – The safer, easier way to pay online!"
                   className={'btn'}
            />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
        </form>
    )
};

export default PayPallAddButton



