export default function RecordsReducer(currentRecords, action) { 
    switch (action) {
        case 'add': {
            return [...currentRecords, "added"];
        }
        case 'delete': {
            currentRecords.splice(currentRecords.length - 1, 1);
            return [...currentRecords];
        }
        default:
            return currentRecords;
    }
}
