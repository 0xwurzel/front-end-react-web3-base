import { useMoralis } from "react-moralis";

const supportedChains = ["31337", "4"];

function Home() {
    const { isWeb3Enabled, chainId } = useMoralis();
    return (
        <div>
            {isWeb3Enabled ? (
                <div>
                    {supportedChains.includes(parseInt(chainId).toString()) ? (
                        <div className="flex flex-row">
                            <h1>Hello</h1>>
                        </div>
                    ) : (
                        <div>{`Please switch to a supported chainId [${parseInt(
                            chainId
                        ).toString()} won't work]. The supported Chain Ids are: ${supportedChains}`}</div>
                    )}
                </div>
            ) : (
                <div>Please connect to a Wallet</div>
            )}
        </div>
    );
}

export default Home;
