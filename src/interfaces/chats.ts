interface Message {
    address: string
    text: string,
    content: BinaryData | undefined,
    time: string,
    read: boolean
}

interface Chat {
    address: string
    master_contacrt_address: string,
    messages: Message[]
}