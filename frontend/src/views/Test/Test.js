import React from 'react';
import { Divider } from '@material-ui/core';

const Test = () => {
    return (
        <div
            style={
                {
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }

        >
            <div
            style={{
                width: "50%",
                border: '2px solid red',
                padding : 20,
                borderRadius: 20
            
            }}
            
            >   
                Em có sai với ai đi nữa, có làm cái gì đi nữa. 
                Nếu có phải trả giá thì em cũng xin chấp nhận. Bởi vì anh biết đấy.
                Ra xã hội làm ăn bươn chải. Liều thì ăn nhiều, không liều thì ăn ít.
                Muốn thành công thì phải chấp nhận chịu qua đắng cay ngọt bùi.
                Làm ăn muốn kiếm được tiền phải chấp nhận mạo hiểm, nguy hiểm một tý, 
                nhưng “trong tầm kiểm soát”.
                <Divider></Divider>
                <h3>
                Xã hội này chỉ có làm, chịu khó, cần cù thì bù siêng năng. Chỉ có làm thì mới có ăn. 
                Những cái loại không làm mà đòi có ăn thì chỉ có ăn đầu b***, ăn c**.
                </h3>
            </div>

        </div>
    );
}

export default Test;
