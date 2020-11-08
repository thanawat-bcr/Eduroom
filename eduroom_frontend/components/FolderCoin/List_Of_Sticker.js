import ProductSticker_Render from './ProductSticker_Render';
import Styles from '../../styles/CoinStyles/List_Of_Sticker.module.css';
import { useEffect, useState } from 'react';

const ListSticker = props => {
        const [stickers, setSticker] = useState([]);
        const [page, setPage] = useState(1);
        const [max, setMax] = useState(1);
        useEffect(() => {
            const data = props.item.slice(0, 12);
            setSticker(data);
            const mx = Math.ceil(data.length / 3);
            setMax(mx);
        }, []);
        const renderSlide = () => {
            const nowSlide = stickers.slice(page * 3 - 3, page * 3);
            const arr = nowSlide.map((item, index) => {
                return (
                    <ProductSticker_Render
                        title={item.title}
                        price={item.price}
                        index={index}
                        id={item.id}
                        key={item.id}
                    ></ProductSticker_Render>
                );
            });
            return (
                <div style={{ display: 'flex',position:'relative',marginLeft:40}}>
                  <button className={Styles.btn} disabled={page === 1} onClick={() => setPage(page - 1)}>
                    {' < '}
                  </button>
                  <div style={{ width: '90%'}}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto auto',
                      }}
                    >
                      {arr}
                    </div>
                  </div>
                  <button className={Styles.btn} onClick={() => setPage(page + 1)} disabled={page === max}>
                    {' > '}
                  </button>
                </div>
              );
        };
    const renderList = () => {
        const stickers = props.item.map((item, index) => {
            return (
                <div key={item.id} className={Styles.text}>
                    <ProductSticker_Render
                        title={item.title}
                        price={item.price}
                        index={index}
                        id={item.id}
                        key={item.id}
                    ></ProductSticker_Render>
                </div>
            );
        });
        return stickers;
    };


    
    return (
        <div >
            <div className={Styles.box}>{renderSlide()}</div>
            <div className={Styles.div}>{renderList()}</div>
        </div>
    );
};
export default ListSticker;
