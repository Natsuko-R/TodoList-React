import classes from './Confirm.module.css';
import Card from "../Card/Card";
import Mask from '../Mask/Mask.js';

const Confirm = (props) => {

    return (
        <Mask onClick={props.onCancel}>
            <Card className={classes.container} onClick={e => e.stopPropagation()}>
                <div>{props.confirmText}</div>

                <div className={classes.confirmBtns}>
                    <button onClick={props.onConfirm}>确认</button>
                    <button onClick={props.onCancel}>取消</button>
                </div>
            </Card>
        </Mask>
    )
};

export default Confirm;
