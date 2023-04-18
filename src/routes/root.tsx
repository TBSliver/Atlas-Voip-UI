import React from "react";
import {Typography} from "antd";
import {useSelector} from "react-redux";
import {StoreType} from "../data/store";

const {Title} = Typography;

const Root: React.FC = () => {
    const players = useSelector((state: StoreType) => state.volumes);

    return (
        <>
            <Title>Home</Title>
            {players.map(player => (
                <div>{player.username} Volume {player.volume}</div>
            ))}
        </>
    )
}

export default Root;