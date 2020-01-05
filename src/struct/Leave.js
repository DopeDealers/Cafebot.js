class MemberLeave {
    constructor(packet) {
        this.username = packet.username;
        this.discriminator = packet.discriminator;
        this.id = packet.id;
    }
    tostringS() {
        return `${this.username}#${this.discriminator} (${this.id})`;
    }
    get tagging() {
        return `${this.username}#${this.discriminator}`;
    }
}
module.exports = MemberLeave;