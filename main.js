// 1-masala
// let user = {
//     firstName: " aSaDbEk ",
//     lastName: " ABDULHAMIDOV ",
//     email: " ASADBEK@GMAIL.COM ",
//     username: " asadbek_dev "
// };

// // 1. Ism va familiyani tozalash va to'g'ri formatga keltirish
// let fName = user.firstName.trim();
// let cleanFirstName = fName[0].toUpperCase() + fName.slice(1).toLowerCase();

// let lName = user.lastName.trim();
// let cleanLastName = lName[0].toUpperCase() + lName.slice(1).toLowerCase();

// // 2. Emailni tozalash va kichik harfga o'tkazish
// let cleanEmail = user.email.trim().toLowerCase();

// // 3. Username ni tozalash va kichik harfga o'tkazish
// let cleanUsername = user.username.trim().toLowerCase();

// // Shartlarni tekshirish uchun o'zgaruvchilar
// let isEmailValid = cleanEmail.includes("@") && cleanEmail.endsWith(".com");
// let isUsernameValid = cleanUsername.length >= 5;

// // Natijalarni chiqarish
// console.log("Ism:", cleanFirstName);
// console.log("Familiya:", cleanLastName);
// console.log("Email:", cleanEmail);
// console.log("Username:", cleanUsername);

// if (isEmailValid && isUsernameValid) {
//     console.log("Holat: muvaffaqiyatli ro'yxatdan o'tdi");
// } else {
//     console.log("Holat: Xatolik bor!");
//     if (!isEmailValid) console.log("Xato maydon: Email noto'g'ri formatda (@ va .com bo'lishi kerak).");
//     if (!isUsernameValid) console.log("Xato maydon: Username kamida 5 ta belgidan iborat bo'lishi kerak.");
// }
// 2-masala
// let userForm = {
//     name: " MALİKa ",
//     email: " MALIKA@EXAMPLE.COM ",
//     phone: " +998 90 123 45 67 ",
//     password: " Malika2026 "
// };

// let cleanName = userForm.name.trim();
// let formattedName = cleanName[0].toUpperCase() + cleanName.slice(1).toLowerCase();

// let cleanEmail = userForm.email.trim().toLowerCase();
// let cleanPhone = userForm.phone.trim();
// let cleanPassword = userForm.password.trim();

// let isEmailOk = cleanEmail.includes("@") && cleanEmail.endsWith(".com");
// let isPhoneOk = cleanPhone.startsWith("+998");
// let isPassOk = cleanPassword.length >= 8;

// console.log("Ism:", formattedName);
// console.log("Email:", cleanEmail);
// console.log("Telefon:", cleanPhone);
// console.log("Parol uzunligi:", cleanPassword.length);

// if (isEmailOk && isPhoneOk && isPassOk) {
//     console.log("Holat: ma'lumotlar qabul qilindi");
// } else {
//     console.log("Holat: Ma'lumotlarda xatolik mavjud.");
// }
// 3-masala
// let product = {
//     name: " WIRELESS HEADPHONES ",
//     category: "ELECTRONICS",
//     description: " Bluetooth headphones with noise cancellation ",
//     code: " WH-2026 "
// };

// let cleanProdName = product.name.trim().toLowerCase();
// let formattedProdName = cleanProdName[0].toUpperCase() + cleanProdName.slice(1);

// let cleanCategory = product.category.trim().toUpperCase();
// let cleanDesc = product.description.trim();
// let cleanCode = product.code.trim();

// let isDescLong = cleanDesc.length >= 20;
// let isCodeValid = cleanCode.startsWith("WH-");
// let hasBluetooth = cleanDesc.toLowerCase().includes("bluetooth");

// console.log("Mahsulot:", formattedProdName);
// console.log("Kategoriya:", cleanCategory);
// console.log("Kod:", cleanCode);

// if (isDescLong && isCodeValid && hasBluetooth) {
//     console.log("Holat: tekshiruvdan o'tdi");
// } else {
//     console.log("Holat: Mahsulot ma'lumotlari to'liq emas.");
// }
// 4-masala
// let message = {
//     sender: " SARDOR ",
//     subject: " PAYMENT ISSUE ",
//     text: " I cannot complete my payment. Please help! ",
//     email: " SARDOR@MAIL.COM "
// };

// let cleanSender = message.sender.trim();
// let formattedSender = cleanSender[0].toUpperCase() + cleanSender.slice(1).toLowerCase();

// let cleanSubject = message.subject.trim().toLowerCase();
// let cleanText = message.text.trim();
// let cleanMsgEmail = message.email.trim().toLowerCase();

// let isTextLong = cleanText.length >= 20;
// let hasPayment = cleanText.toLowerCase().includes("payment");
// let isMsgEmailValid = cleanMsgEmail.includes("@");

// console.log("Yuboruvchi:", formattedSender);
// console.log("Mavzu:", cleanSubject);
// console.log("Email:", cleanMsgEmail);

// if (isTextLong && hasPayment && isMsgEmailValid) {
//     console.log("Holat: murojaat qabul qilindi");
// } else {
//     console.log("Holat: Xatolik mavjud, murojaat talabga javob bermaydi.");
// }
// 5-masala
// let profile = {
//     fullName: " dILSHOD KARIMOV ",
//     email: " DILSHOD@GMAIL.COM ",
//     username: " dilshod_uz ",
//     city: " LOSHKENT ",
//     website: " https://dilshod.uz "
// };

// let fullNameTrim = profile.fullName.trim();
// // Bo'sh joy bo'yicha ism va familiyani ajratib olish (split() ishlatmasdan, slice yordamida)
// let spaceIndex = fullNameTrim.indexOf(" ");
// let firstNamePart = fullNameTrim.slice(0, spaceIndex);
// let lastNamePart = fullNameTrim.slice(spaceIndex + 1);

// let formattedFullName = 
//     firstNamePart[0].toUpperCase() + firstNamePart.slice(1).toLowerCase() + " " +
//     lastNamePart[0].toUpperCase() + lastNamePart.slice(1).toLowerCase();

// let cleanProfEmail = profile.email.trim().toLowerCase();
// let cleanProfUser = profile.username.trim().toLowerCase();

// let cityTrim = profile.city.trim().toLowerCase();
// let formattedCity = cityTrim[0].toUpperCase() + cityTrim.slice(1);

// let cleanWebsite = profile.website.trim();

// let isProfEmailValid = cleanProfEmail.includes("@") && cleanProfEmail.endsWith(".com");
// let isProfUserValid = cleanProfUser.length >= 6;
// let isWebValid = cleanWebsite.startsWith("https://");

// console.log("F.I.Sh.:", formattedFullName);
// console.log("Email:", cleanProfEmail);
// console.log("Username:", cleanProfUser);
// console.log("Shahar:", formattedCity);
// console.log("Website:", cleanWebsite);

// if (isProfEmailValid && isProfUserValid && isWebValid) {
//     console.log("Holat: profil tasdiqlandi");
// } else {
//     console.log("Holat: Profil talablarini bajarishda xatoliklar bor.");
// }