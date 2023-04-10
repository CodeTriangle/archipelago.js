/**
 * Tags are represented as a list of strings, these are some of the most common tags.
 */
export const enum CommonTags {
    /**
     * Signifies that this client is a reference client, its usefulness is mostly in debugging to compare client
     * behaviours more easily.
     */
    REFERENCE_CLIENT = "AP",

    /**
     * Client participates in the DeathLink mechanic, therefore will send and receive DeathLink {@link BouncePacket}s.
     */
    DEATH_LINK = "DeathLink",

    /**
     * Tells the server that this client will not send locations and is actually a Tracker. When specified and used with
     * an empty `game` in the {@link ConnectPacket}, `game` and `game`'s version validation will be skipped.
     */
    TRACKER = "Tracker",

    /**
     * Tells the server that this client will not send locations and is intended for chat. When specified and used with
     * an empty `game` in the {@link ConnectPacket}, `game` and `game`'s version validation will be skipped.
     */
    TEXT_ONLY = "TextOnly",
}
