const numberWithCommas = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const numberFormatter = (num: number, fixed?: number) => {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(fixed ? fixed : 0) + "k";
    } else if (num > 1000000) {
        return (num / 1000000).toFixed(fixed ? fixed : 0) + "m";
    } else if (num < 1000) {
        return num;
    }
};

const formatWalletAddress = (
    address: string,
    start: number = 7,
    end: number = 5
) => {
    if (!address) {
        return "";
    }
    return (
        address.slice(0, start) + "...." + address.slice(address.length - end)
    );
};

function hexToRgbA(hex: string, alpha: number) {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
            ","
        )}, ${alpha})`;
    }
}

export { numberWithCommas, numberFormatter, formatWalletAddress, hexToRgbA };
