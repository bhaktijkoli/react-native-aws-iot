import { CreateThingCommand, IoTClient } from "@aws-sdk/client-iot";
import { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_THING_TYPE_NAME, AWS_THING_CORE_DEVICE } from '@env';
import { getUniqueId, getDeviceName, getManufacturer } from 'react-native-device-info';
import { GetConnectivityInfoCommand, GreengrassV2Client } from "@aws-sdk/client-greengrassv2";

const register = async () => {
    const client = new IoTClient({
        region: AWS_REGION,
        credentials: {
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
    });
    const deviceId = getUniqueId()
    const deviceName = await getDeviceName();
    const manufacturer = await getManufacturer()
    const command = new CreateThingCommand({
        thingName: `mobile-${deviceId}`,
        thingTypeName: AWS_THING_TYPE_NAME,
        attributePayload: {
            attributes: {
                deviceId,
                deviceName,
                manufacturer
            }
        }
    });
    const response = await client.send(command);
    console.log({ response })
}
const getEndpoint = async () => {
    const client = new GreengrassV2Client({
        region: AWS_REGION,
        credentials: {
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
    });
    const command = new GetConnectivityInfoCommand({
        thingName: AWS_THING_CORE_DEVICE
    });
    const response = await client.send(command);
    console.log({ response });
}

export default {
    register,
    getEndpoint
}