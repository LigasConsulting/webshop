import React from 'react'

const PayPallAddButton = (props) => {
    return (
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="PBEX58FA2PAV6"/>
            <table>
                <tr>
                    <td>
                        <input type="hidden" name="on0" value="Colours"/>Colours
                    </td>
                </tr>
                <tr>
                    <td>
                        <select name="os0">
                            <option value="Blue-Red">Blue-Red £35.99 GBP</option>
                            <option value="Orange">Orange £35.99 GBP</option>
                            <option value="Blue">Blue £35.99 GBP</option>
                            <option value="Khaki">Khaki £35.99 GBP</option>
                            <option value="Pink">Pink £35.99 GBP</option>
                        </select>
                    </td>
                </tr>
            </table>
            <input type="hidden" name="currency_code" value="GBP"/>
            <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif"
                   border="0"
                   name="submit"
                   alt="PayPal – The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
        </form>
    )
};

export default PayPallAddButton



