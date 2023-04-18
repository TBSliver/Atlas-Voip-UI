import React, {useState} from "react";
import {Button, Col, Form, InputNumber, Row, Slider, Typography} from "antd";
import {v4 as uuid} from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {add_user, set_volume, StoreType} from "../data/store";

const {Title} = Typography;

const Volumes: React.FC = () => {
    const players = useSelector((state: StoreType) => state.volumes);
    const dispatch = useDispatch()


    const tempAddPlayer = (e: any) => {
        console.log(e)
        dispatch(add_user( {username: "New User", volume: 50, steam_id: uuid()}))
    }

    const handleVolumeChange = (idx: number) => (newValue: number | null) => {
        if (newValue == null) return
        dispatch(set_volume({idx, volume: newValue}))
    }

    return (
        <>
            <Title>Volumes</Title>
            <Form>
                {players.map((player, idx) => (
                    <Form.Item key={player.steam_id} label={player.username}>
                        <Row>
                            <Col span={12}>
                                <Slider min={0} max={200} value={player.volume} onChange={handleVolumeChange(idx)}/>
                            </Col>
                            <Col span={4}>
                                <InputNumber min={0} max={200} value={player.volume}
                                             onChange={handleVolumeChange(idx)}/>
                            </Col>
                        </Row>
                    </Form.Item>
                ))}
            </Form>
            <Button onClick={tempAddPlayer}>Add Player</Button>
        </>
    )
}

export default Volumes;