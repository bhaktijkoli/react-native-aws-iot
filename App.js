import React from 'react';
import { StyleSheet, View, NativeModules } from 'react-native';

const { MqttModule } = NativeModules;

const App = () => {
  React.useEffect(() => {
    (async () => {
      try {
        const config = {
          certificate: '-----BEGIN CERTIFICATE-----\n' +
            'MIIDWjCCAkKgAwIBAgIVAOPsj3tkSDnIj67c6dPWhpzFrHIkMA0GCSqGSIb3DQEB\n' +
            'CwUAME0xSzBJBgNVBAsMQkFtYXpvbiBXZWIgU2VydmljZXMgTz1BbWF6b24uY29t\n' +
            'IEluYy4gTD1TZWF0dGxlIFNUPVdhc2hpbmd0b24gQz1VUzAeFw0yMjA3MTIwNjQx\n' +
            'MjBaFw00OTEyMzEyMzU5NTlaMB4xHDAaBgNVBAMME0FXUyBJb1QgQ2VydGlmaWNh\n' +
            'dGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCeA6w35Sdzsckc9x5V\n' +
            'yFImC8a0Zq8PK1keyHnveWi8hsOHCPvvnNf/+dAKR0IePnoxm2TDjO5gm96Y4mTo\n' +
            'G2DCdbXvhIv6LSOlH8OllwRQuUyIHSWeACsJzX4a90jk418G80NjwQ5yFWJkbHAV\n' +
            'Zg0tQ4hlVBKj0APCq2d6VoZlDAQUpfDcuUMN0eSDNB2Ue4UpxlfKoz7QOlJssYFL\n' +
            'hw/vXmTLvF3JuJ9ZKD1kFo2Y6Wqr63dY1BHcvtq2s/7dJm4OKokbEW1Ava/tHDmm\n' +
            '57HLp6h14qAWV3TGODZwV5LjI+edqblUXrFfSzQlPwFLXAsNlTYqn0vgeXBK1p3Z\n' +
            '0s+9AgMBAAGjYDBeMB8GA1UdIwQYMBaAFOtiXPQKdQsXwyO9mf7qQgaa/x/9MB0G\n' +
            'A1UdDgQWBBS+GYe0af4Bc+za/d6CXdBj/rpZIDAMBgNVHRMBAf8EAjAAMA4GA1Ud\n' +
            'DwEB/wQEAwIHgDANBgkqhkiG9w0BAQsFAAOCAQEA14prO9p2+NEwX8N232ey95bD\n' +
            'gsixns5S/UesJokEc/CownquogcLLJUSs6wMcswx3yJ//+g6GL1jr39oQPFPk4pJ\n' +
            'QNkmYDS4z9k2TpgAb1qFSEQ9y7OVKGK4NOPZcmLE4Azy2hs464R4EopuGhcWaAM2\n' +
            'k1vmX1QxPhiHJCluM7trrmjr04ZF0jeCzB3auLJA4h8eagp4SdDh/O+cYNEZsHPB\n' +
            'PXmQFCjBImVPN4kwyTos2RFiCVO0mFEwKDM/66MxOUK2RGPuu8MFSCpIW2IIbUmw\n' +
            '/RoK/wToUDgqPyi+kT6EH3Zr/VBFpaCxdprdXoiyycD6CS1+5aEk/PRaDqzOCg==\n' +
            '-----END CERTIFICATE-----\n',
          privateKey: '-----BEGIN RSA PRIVATE KEY-----\n' +
            'MIIEowIBAAKCAQEAngOsN+Unc7HJHPceVchSJgvGtGavDytZHsh573lovIbDhwj7\n' +
            '75zX//nQCkdCHj56MZtkw4zuYJvemOJk6BtgwnW174SL+i0jpR/DpZcEULlMiB0l\n' +
            'ngArCc1+GvdI5ONfBvNDY8EOchViZGxwFWYNLUOIZVQSo9ADwqtnelaGZQwEFKXw\n' +
            '3LlDDdHkgzQdlHuFKcZXyqM+0DpSbLGBS4cP715ky7xdybifWSg9ZBaNmOlqq+t3\n' +
            'WNQR3L7atrP+3SZuDiqJGxFtQL2v7Rw5puexy6eodeKgFld0xjg2cFeS4yPnnam5\n' +
            'VF6xX0s0JT8BS1wLDZU2Kp9L4HlwStad2dLPvQIDAQABAoIBAAbA325wI9SFB7Ru\n' +
            'N2SxMBmiLTbuoJLEZoWzScrbZIeSNu8hiir+iBjPo32c+A103CIcoxzcfB+y6bud\n' +
            'CXUGHoeRIlp/TsA9h6V6CxGbt7p/gO7cWAw9s5kyqC4c3Yey1A/m+71atfRYR6FF\n' +
            'JTE08GE73qt+AWHw9Qgv7TdEVXAiFyGDt2IRfmV60MeF9wPlRvUc3H1yY5MBnAGr\n' +
            '8OpQY0SKmkB5/LfQ1gn8iRA7qkNwX7dAVaan5wiPwnB3QzwgR5VdQfUqTYId++ID\n' +
            '8WcSHtx8NLtjdmM4OwYN7c+ybLC7ji2ykAnWmr6ok906OIdiD/eeIGx9ZqPzhQ+I\n' +
            'SGj7nF0CgYEA0bSYkmattZoqaRjt8oNMYUI6ItGS09MSDYEMdhGHcwD/pVEWU+s8\n' +
            'yUoqJz5qZHugQ9mMPpwK341fVymaZSAmSX4ezm4spa0YnUAgFQ0eTnlQE0pvQN5q\n' +
            'rOtu/EFUvCDiPAXpG1dqK0j+GacnvgeH2MOr1RxlbYPNRfZcJ3KNRKcCgYEAwOXH\n' +
            'RxVcB6aK2fqclF40RZgMvvPdmZCP6TmE0Z+xyCr6OzjSWQk01bWOB9G0V0KEXLAv\n' +
            'bjR2ySmN2f26HoBEQmPqhea5Nq0CBcn5LhrKN3zVx9cTD6RDlab4CMXK9ekTzDKx\n' +
            'MgNLS+9trx7B1HAaFRI+MNVk0BJxwyOkPFe7gPsCgYBqq/wEVLi+LPqv1V+Mwh9D\n' +
            'RgX+mi6fE7oWJnPpR0doR7TDKjk6XOnh1pkUt1o1XPGMMgh1/LhHOUmrM9123WC8\n' +
            'd6xCA6cwa5meu/TV4INvFaSW+4EWNU18QpKFPNJWlD+gmr0WDGRUOmAPOokrz/bZ\n' +
            'W8d3s2cgyy/LC+OaqVmU9wKBgBxRXzjjPNhurZGkhdoOHlRdJvndaRnDLC1L4WC4\n' +
            'teuxy3xoMhEaFeSNu6UQNw5cWHwW7U+bahjL/eQTqIATynGIo4Q2w9fv/A0Hgoov\n' +
            'KqKMtAGbZFP2hGly0pTPHKWPKvXeNz8lVqd2Jb8An+nk7x9Kx1B580vMeWDxWYn2\n' +
            'QzODAoGBAMLINmdY1bRAdYTnFUZGAfAGkfwkvosvKq2LPFhjwvCOTrs5+h1lntzm\n' +
            'NzlmMcqgn/BIZQz7MxxZPbTegwD6vWsMK0EyyiaXfmsXV3bjmtgt3rNywSUqwJUd\n' +
            'Rn61olMJpUr5GzallBc/0tjgi6Cxc4FSdZAOMySpbgsOzPeNwtKU\n' +
            '-----END RSA PRIVATE KEY-----\n',
          authorityCertificate: '-----BEGIN CERTIFICATE-----\n' +
            'MIID1DCCArygAwIBAgIUXY6mbF5su2BmJMh4/Eg24utaam4wDQYJKoZIhvcNAQEL\n' +
            'BQAwgYkxCzAJBgNVBAYTAlVTMRgwFgYDVQQKDA9BbWF6b24uY29tIEluYy4xHDAa\n' +
            'BgNVBAsME0FtYXpvbiBXZWIgU2VydmljZXMxEzARBgNVBAgMCldhc2hpbmd0b24x\n' +
            'EDAOBgNVBAcMB1NlYXR0bGUxGzAZBgNVBAMMEkdyZWVuZ3Jhc3MgQ29yZSBDQTAe\n' +
            'Fw0yMjA3MDcwODAwNDlaFw0yNzA3MDYwODAwNDlaMIGJMQswCQYDVQQGEwJVUzEY\n' +
            'MBYGA1UECgwPQW1hem9uLmNvbSBJbmMuMRwwGgYDVQQLDBNBbWF6b24gV2ViIFNl\n' +
            'cnZpY2VzMRMwEQYDVQQIDApXYXNoaW5ndG9uMRAwDgYDVQQHDAdTZWF0dGxlMRsw\n' +
            'GQYDVQQDDBJHcmVlbmdyYXNzIENvcmUgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\n' +
            'DwAwggEKAoIBAQCTlKb+y32uVUxYgVdv+pB2OoKHlVBWywynC6NZSA5trJVIU8tC\n' +
            'DOk9k1RiIv7TFTUSJ3Je6otTFlOGXqPY+Hezpm+KG8S8r97dgZgJk1ldVsXUAe/A\n' +
            'e5ae2EulBizYwk/U1c8lDX7QcGRU0KE2DmxpN4wNZT/2EH5l+OX2MR/UASPjtyEE\n' +
            'wLcXCxSMHw2+dRwc6SCGdis5FD6P26IIptreRQuwmkkFKSOqyaWpvrj3tzzI3DQI\n' +
            'tYhOmeopdC6+DzN7GgiDONN3mQgNMQbvSnPh1ztn7vr4Vs1u7ntymy+yvjPLatVf\n' +
            'ry7CEO6Aeg/2hSfYWsNIV+xPCXpitw3HgXv9AgMBAAGjMjAwMA8GA1UdEwEB/wQF\n' +
            'MAMBAf8wHQYDVR0OBBYEFDCg2iSHkYmrX50Ot9ORUVYxZUJ2MA0GCSqGSIb3DQEB\n' +
            'CwUAA4IBAQBK8w5OCX5amKDF0Gw8Gfd1xjFgfwnGjfPL+07VyQLG0W147HQJmWrf\n' +
            'XNxcL8Y4ViKAMDfBxGhWjhDodNZUrOoDEdJjq+NCnShQgKj/cfls1dhmfGUlp2x7\n' +
            'YLJUn/rC8bcYFQ5amlTKt478kyxBqcXgn/kRV0Aj+W9yRk9Mwq6nrmedHwPEmcn6\n' +
            'wakm1nSgE38Fq+Gf7CNl6fKw/cSMP28OzhQLrwx7HX3VSUBM67UvF2RpUXWttHmG\n' +
            'CiN3VD76u7UyS9i91/+ezav6Erkuz4FbVf93mogNRfA+UCfHxmoBF6NtvSLJfyE/\n' +
            'pKU7es3k1oHaDnP9wdv9GiCqQYwlNA1e\n' +
            '-----END CERTIFICATE-----\n',
          clientId: 'mobile-test2',
          serverUri: 'wss://192.168.0.107:8883'
        }

        MqttModule.connect(config)

      } catch (error) {
        console.log(error)
      }
    })()

  }, [])
  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
});

export default App;
