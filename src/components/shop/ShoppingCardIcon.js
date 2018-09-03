import React, {PureComponent} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {ShopContext} from "../../ShopContext";


class ShoppingCardIcon extends PureComponent {

    constructor(props) {
        super(props);
        this.form = React.createRef();
    }

    handleClick() {
        this.form.current.submit();
    }

    getCount = (items) => {
        let no = items.length > 0 ? items.map(item => item.count).reduce((acc, val) => acc + val) : 0;
        if (no) {
            return (
                <span className="fa-layers-counter">{no}</span>
            )
        }
    };

    render() {
        return (
            <div className={this.props.className}>
                <form ref={this.form} target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <div className={'pointer'} onClick={this.handleClick.bind(this)}>
                        <div className="fa-layers">
                            <FontAwesomeIcon icon="shopping-cart"/>
                            <ShopContext.Consumer>
                                {({items}) => this.getCount(items)}
                            </ShopContext.Consumer>
                        </div>

                        <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="encrypted"
                               value="-----BEGIN PKCS7-----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-----END PKCS7-----"/>
                        <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1"
                             height="1"/>

                    </div>
                </form>
            </div>
        );
    };
}

export default ShoppingCardIcon;
