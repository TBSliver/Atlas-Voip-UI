import React from "react";
import {Form, Input, Select, Switch, Typography} from "antd";

const {Title} = Typography;

const Settings: React.FC = () => {
    const onChange = (checked: boolean) => {
        console.log(`ive been changed to ${checked}`);
    }

    const handleSelectChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <>
            <Title>Settings</Title>
            <Form>
                <Form.Item label={"Some Input"}>
                    <Input/>
                </Form.Item>
                <Form.Item label={"Some Switch"}>
                    <Switch defaultChecked onChange={onChange}/>
                </Form.Item>
                <Form.Item label={"Select Thing"}>
                    <Select
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        onChange={handleSelectChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                </Form.Item>
            </Form>

        </>
    )
}

export default Settings;