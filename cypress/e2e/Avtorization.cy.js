describe('Проверка Авторизации', function () {

  it('Позитивный кейс авторизации', function () {
       cy.visit('https://login.qa.studio/');          // посетить сайт https://login.qa.studio/
       cy.get('#mail').type('german@dolnikov.ru');    // в поле логин ввести верный логин
       cy.get('#pass').type('iLoveqastudio1');        // в поле пароль ввести верный пароль
       cy.get('#loginButton').click();                // нажать кнопку войти 

       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка, что есть нужный текст
       cy.get('#messageHeader').should('be.visible');                   // текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');   // наличие кнопки крестик
   })

   it('Проверка логики восстановления пароля', function () {
      cy.visit('https://login.qa.studio/');             // посетить сайт https://login.qa.studio/
      cy.get('#forgotEmailButton').click();             // нажать кнопку Забыли пароль
      cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввести любой имейл
      cy.get('#restoreEmailButton').click();            // нажать на кнопку отправить код

      cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка, что получили нужный текст 
      cy.get('#messageHeader').should('be.visible');                           // текст виден пользователю
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');           // наличие кнопки крестик
  })

  it('Негативный кейс авторизации', function () {
      cy.visit('https://login.qa.studio/');             // посетить сайт https://login.qa.studio/
      cy.get('#mail').type('german@dolnikov.ru');       // в поле логин ввести верный логин
      cy.get('#pass').type('iLoveqastudio13');          // в поле пароль ввести неверный пароль
      cy.get('#loginButton').click();                   // нажать кнопку войти

      cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка, что есть нужный текст
      cy.get('#messageHeader').should('be.visible');                     // текст виден пользователю
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');     // наличие кнопки крестик
  })

  it('Негативный кейс авторизации', function () {
      cy.visit('https://login.qa.studio/');             // посетить сайт https://login.qa.studio/
      cy.get('#mail').type('german@dolnikov1.ru');      // в поле логин ввести НЕверный логин
      cy.get('#pass').type('iLoveqastudio1');           // в поле пароль ввести верный пароль
      cy.get('#loginButton').click();                   // нажать кнопку войти

      cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка, что есть нужный текст
      cy.get('#messageHeader').should('be.visible');                     // текст виден пользователю
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');     // наличие кнопки крестик
  })

  it('Негативный кейс валидации', function () {
      cy.visit('https://login.qa.studio/');            // посетить сайт https://login.qa.studio/
      cy.get('#mail').type('germandolnikov.ru');       // в поле логин ввести логин без @
      cy.get('#pass').type('iLoveqastudio1');          // в поле пароль ввести верный пароль
      cy.get('#loginButton').click();                  // нажать кнопку войти

      cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка, что есть нужный текст
      cy.get('#messageHeader').should('be.visible');                           // текст виден пользователю
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');           // наличие кнопки крестик
  })

  it('Приведение к строчным буквам в логине', function () {
      cy.visit('https://login.qa.studio/');           // посетить сайт https://login.qa.studio/
      cy.get('#mail').type(' german@dolnikov.ru');     // в поле логин ввести логин GerMan@Dolnikov.ru
      cy.get('#pass').type('iLoveqastudio1');         // в поле пароль ввести верный пароль
      cy.get('#loginButton').click();                 // нажать кнопку войти

      cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка, что есть нужный текст
      cy.get('#messageHeader').should('be.visible');                     // текст виден пользователю
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');     // наличие кнопки крестик
  })
})