import { TabItem } from "./types/types";
import { useState } from 'react';

interface TabsViewProps {
    items: TabItem[];
    onChange: (item: TabItem) => void
}

export default function TabsView({ items, onChange }:TabsViewProps) {

    const [selected, setSelected] = useState<number | null>(items.length >= 0 ? 0 : null);

    const handleClick = (index: number):void => {
        setSelected(index);
    }

    if(selected === null){
        return null;
    }

    return <div>
        <div>
            {
                items.map((item, index) => {
                    return <TabView index={index} item={item} active={selected === index} onClick={handleClick} />
                })
            }
        </div>
        <div>
            <div>{
                    items.map((item, index) => {
                        return <>
                            {selected === index && <item.content />}
                        </>
                    })
                }</div>
        </div>
    </div>;
}
interface TabViewProps {
    index: number;
    active: boolean;
    item: TabItem;
    onClick: (index: number) => void;
}
function TabView({index, active, item, onClick} : TabViewProps) {
    return active ? <div>{item.title}</div> : <button
        onClick={() => {onClick(index)}}
    >{item.title}</button>
}