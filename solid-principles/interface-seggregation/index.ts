// No code should be forced to depend on methods it does not use.

interface IBasicEditor {
    openDocument(): void;
    closeDocument(): void;
    saveDocument(): void;
}

interface IAdvancedEditor {
    scanDocument(): void;
    shareDocument(): void;
}

class BasicEditor implements IBasicEditor {
    openDocument(): void {
        console.log("Open document")
    }

    closeDocument(): void {
        console.log("Close document")
    }

    saveDocument(): void {
        console.log("Save document")
    }
    
}

class AdvancedEditor implements IBasicEditor, IAdvancedEditor {
    openDocument(): void {
        console.log("Open document")
    }

    closeDocument(): void {
        console.log("Close document")
    }

    saveDocument(): void {
        console.log("Save document")
    }

    scanDocument(): void {
        console.log("Scan document")
    }

    shareDocument(): void {
        console.log("Share document")
    }
}