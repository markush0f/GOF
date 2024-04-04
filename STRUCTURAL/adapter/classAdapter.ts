// Interface for old service message
interface TextMessagingService {
    sendTextMessage(text: string): void;
}

// Implementation of old message service
class ExistingTextMessagingService implements TextMessagingService {
    sendTextMessage(text: string): void {
        console.log(`Sending text message: ${text}`);
    }
}

// Interface for new message service
interface NewMessagingService {
    sendMessage(message: string): void;
}

// Implementation for new message service
class NewMessagingServiceImpl {
    sendMessage(message: string): void {
        console.log(`Sending message: ${message}`);
    }
}

// Class Adapter: adaps the interface from NewMessagingService to TextMessagingService
class NewMessagingServiceAdapter extends ExistingTextMessagingService implements TextMessagingService {
    private newMessagingService: NewMessagingService;

    constructor(newMessagingService: NewMessagingService) {
        super();
        this.newMessagingService = newMessagingService;
    }

    sendTextMessage(text: string): void {
        // Convert the text to required format
        const message = this.convertTextToMessage(text);
        // Use the new message service for sending the message
        this.newMessagingService.sendMessage(message);
    }

    private convertTextToMessage(text: string): string {
        // Add a new header to converted text
        return `[Converted from text] ${text}`;
    }
}

// Use Adapter Pattern
const existingService = new ExistingTextMessagingService();
existingService.sendTextMessage("Hello, world!"); // Salida: Sending text message: Hello, world!

const newService = new NewMessagingServiceImpl();
const adapterr = new NewMessagingServiceAdapter(newService);
adapterr.sendTextMessage("Hello, world!"); // Salida: Sending message: [Converted from text] Hello, world!
