// In a switch block, you need to add the "break;"
// With Switch and Case, you can compare the value of a variable against other values

// let "variable"

// switch (variable) {

//}

let role;

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Guest Moderator');
        break;
    
    default:
        console.log('Unknown User');
}

// can also be written as an IF statement:

if (role === 'guest') {
    console.log('Guest User');
}
else if (role === 'moderator') {
    console.log('Guest Moderator');
}
else {
    console.log('Unknown User');
}