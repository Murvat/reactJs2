import { useDispatch } from 'react-redux'
import { addGoods } from '../action';




const Goods = () => {
    const dispatch = useDispatch();
    const formHandler = (event) => {
        event.preventDefault();
        let data = event.target.elements;

        dispatch(addGoods(data.id.value, data.title.value, data.image.value))


    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <input type="text" name='id' defaultValue='adasd' />
                    <input type="text" name='title' defaultValue='Беспроводные наушники Apple AirPods 3 with Lightning' />
                    <input type="text" name='image' defaultValue='https://strgimgr.umico.az/sized/280/668098-77d645c419df1b937d53c3f8241be1dd.jpg' />
                </div>
                <div>
                    <button type="submit">add new goods</button>
                </div>
            </form>
        </div>
    )

}

export default Goods;