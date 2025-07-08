>Scroll for English

# Şarkı Sözleri Yöneticisi 🎵

Şarkı Sözleri Yöneticisi, favori şarkı sözlerinizi kolayca kaydetmenizi, düzenlemenizi, aramanızı ve yönetmenizi sağlayan basit ve kullanıcı dostu bir web uygulamasıdır. Tüm verileriniz tarayıcınızın yerel depolama alanında saklanır, bu sayede internet bağlantısı olmasa bile şarkı sözlerinize her zaman erişebilirsiniz.

---

## Özellikler ✨

* **🎶 Şarkı Ekle/Düzenle:** Şarkı adı, sanatçısı ve sözleriyle yeni şarkılar ekleyin veya mevcut şarkıları kolayca güncelleyin.
* **🔍 Akıllı Arama:**
    * **🧹 Otomatik Boşluk Temizleme:** Arama kutucuğuna yazdığınız metnin başındaki ve sonundaki gereksiz boşlukları otomatik olarak kaldırır.
    * **🎤 Sözlerde Arama:** Başlık veya sanatçı adında doğrudan bir eşleşme bulunamazsa, şarkı sözlerinin içinde arama yapar.
    * **📝 Eşleşen Söz Satırlarını Gösterme:** Şarkı sözlerinde bir eşleşme bulunduğunda, ilgili söz satırlarının ilk birkaç tanesi arama sonuçlarında gösterilir.
* **📜 Şarkı Sözlerini Görüntüle:** Herhangi bir şarkıya tıklayarak tüm sözlerini ayrı bir ekranda okuyun.
* **❌ Şarkı Silme:** İstemediğiniz şarkıları kolayca listeden kaldırın.
* **📊 Veri Yönetimi:**
    * **📥 Dışa Aktarma:** Tüm şarkı listenizi bir JSON dosyası olarak dışa aktararak yedekleyin veya başka bir cihaza taşıyın.
    * **📤 İçe Aktarma:** Daha önce dışa aktardığınız bir JSON dosyasını içe aktarın. Mevcut şarkılarla birleştirme veya mevcut şarkıların üzerine yazma seçenekleri sunulur.
* **🔠 Alfabetik Sıralama:** Şarkılar, başlıklarına göre alfabetik olarak sıralanır ve her harf grubu için bir başlık bulunur.
* **📱 Duyarlı Tasarım:** Uygulama, farklı ekran boyutlarına (masaüstü, tablet, mobil) uyum sağlar.

---

## Nasıl Kullanılır? 🚀

1.  **Uygulamayı Açın:** `index.html` dosyasını bir web tarayıcısında açın.
2.  **Şarkı Ekleme:**
    * Sağ üstteki **"Şarkı Ekle"** butonuna tıklayın.
    * Şarkı adını, sanatçı adını (isteğe bağlı) ve şarkı sözlerini girin.
    * **"Şarkıyı Kaydet"** butonuna tıklayın.
3.  **Şarkı Arama:**
    * Ana ekrandaki **"Şarkı ara..."** metin kutusuna şarkı adı veya sanatçı adı yazmaya başlayın. Uygulama siz yazdıkça listeyi anında filtreleyecektir.
    * Eğer başlık veya sanatçı adı eşleşmezse, şarkı sözlerinin içindeki eşleşmeler de gösterilir.
4.  **🎵 Şarkı Sözlerini Görüntüleme:** Listeden bir şarkının üzerine tıklayarak tüm şarkı sözlerini görüntüleyebilirsiniz. Geri dönmek için **"Geri Dön"** butonunu kullanın.
5.  **✏️ Şarkı Düzenleme:** Bir şarkının yanındaki **"Düzenle"** butonuna tıklayarak bilgilerini güncelleyebilirsiniz.
6.  **🗑️ Şarkı Silme:** Bir şarkının yanındaki **"Sil"** butonuna tıklayarak şarkıyı silebilirsiniz. Silme işlemi için bir onay mesajı alacaksınız.
7.  **📤 Şarkıları Dışa Aktarma:** **"Dışa Aktar"** butonuna tıklayarak tüm şarkılarınızı bir `sarki_sozleri.json` dosyasına kaydedin.
8.  **📥 Şarkıları İçe Aktarma:** **"İçe Aktar"** butonuna tıklayın ve bir `.json` dosyası seçin. Mevcut şarkılarla birleştirme veya onların üzerine yazma seçeneği sunulacaktır.

---

## Geliştirme Notları 🛠️

* **Teknolojiler:** HTML, Tailwind CSS, JavaScript.
* **Veri Depolama:** Tüm şarkılar tarayıcının `localStorage` özelliğini kullanarak yerel olarak depolanır. Bu, uygulamanın çevrimdışı çalışmasını sağlar ancak tarayıcı verileri temizlenirse şarkılarınızın da silinebileceği anlamına gelir. Verilerinizi yedeklemek için dışa aktarma özelliğini kullanmanız önerilir.

---

## 🌍 Çoklu Dil Desteği 🌐

Şarkı Sözleri Yöneticisi, kullanıcı arayüzünü birden fazla dilde kullanmanıza olanak tanır. Mevcut diller:

- 🇹🇷 **Türkçe** (varsayılan)
- 🇬🇧 **İngilizce**
- 🇩🇪 **Almanca**
- 🇫🇷 **Fransızca**

### 🔽 Nasıl Dil Değiştirilir?

1. Sayfanın sağ üst köşesindeki **dil bayrağı** simgesine tıklayın.
2. Açılan listeden istediğiniz dili seçin.
3. Seçtiğiniz dil, tarayıcınızda kaydedilir ve uygulama tüm metinleri anında günceller.

### 👨‍💻 Geliştiriciler İçin Yeni Dil Ekleme

Uygulamanın çok dilli yapısı `script.js` dosyasındaki `translations` nesnesine dayalıdır. Yeni bir dil eklemek için:

1. `translations` nesnesine yeni bir dil kodu (`es`, `it`, `ar` gibi) ile birlikte bayrak, dil adı ve çevirileri ekleyin:
    ```js
    translations['es'] = {
      flag: '🇪🇸',
      name: 'Español',
      mySongsTitle: 'Mis Canciones',
      // ...
    };
    ```

2. Yeni dile ait metin anahtarlarını eksiksiz eklediğinizden emin olun.

3. Uygulama, sayfa yenilendiğinde otomatik olarak tarayıcının son kullanılan dil ayarını yükleyecektir.

> **Not:** Dil dosyaları doğrudan JavaScript içerisinde tanımlanmıştır; harici JSON ya da çeviri sistemi kullanılmaz.

---


# Song Lyrics Manager 🎵

The Song Lyrics Manager is a simple and user-friendly web application that allows you to easily save, edit, search, and manage your favorite song lyrics. All your data is stored in the browser's local storage, so you can always access your lyrics even without an internet connection.

---

## Features ✨

* **🎶 Add/Edit Song:** Add new songs with their title, artist, and lyrics, or easily update existing songs.
* **🔍 Smart Search:**
    * **🧹 Automatic Whitespace Removal:** Automatically removes unnecessary whitespace from the beginning and end of the text you type in the search box.
    * **🎤 Search in Lyrics:** If no match is found in the title or artist name, it will search within the song lyrics.
    * **📝 Show Matching Lyrics:** When a match is found in the lyrics, the first few lines with the match are displayed in the search results.
* **📜 View Lyrics:** Click on any song to view its full lyrics on a separate screen.
* **❌ Delete Song:** Easily remove unwanted songs from the list.
* **📊 Data Management:**
    * **📥 Export:** Export your entire song list as a JSON file to back it up or transfer it to another device.
    * **📤 Import:** Import a previously exported JSON file. You can choose to merge it with existing songs or overwrite them.
* **🔠 Alphabetical Sorting:** Songs are sorted alphabetically by their title, with each letter group having its own heading.
* **📱 Responsive Design:** The application adapts to different screen sizes (desktop, tablet, mobile).

---

## How to Use? 🚀

1. **Open the Application:** Open the `index.html` file in a web browser.
2. **Add Song:**
    * Click on the **"Add Song"** button in the top-right corner.
    * Enter the song title, artist name (optional), and lyrics.
    * Click **"Save Song"**.
3. **Search for Song:**
    * Start typing the song title or artist name in the **"Search Song..."** text box. The app will filter the list as you type.
    * If there is no match in the title or artist name, matches within the lyrics will also be shown.
4. **🎵 View Lyrics:** Click on any song from the list to view its full lyrics. Use the **"Back"** button to return.
5. **✏️ Edit Song:** Click the **"Edit"** button next to any song to update its details.
6. **🗑️ Delete Song:** Click the **"Delete"** button next to any song to remove it. You will be asked for confirmation before the song is deleted.
7. **📤 Export Songs:** Click on the **"Export"** button to save all your songs as a `sarki_sozleri.json` file.
8. **📥 Import Songs:** Click on the **"Import"** button and choose a `.json` file. You will be given options to either merge with existing songs or overwrite them.

---

## Development Notes 🛠️

* **Technologies:** HTML, Tailwind CSS, JavaScript.
* **Data Storage:** All songs are stored locally in the browser's `localStorage` feature. This ensures the app works offline, but be aware that if the browser's data is cleared, your songs will be deleted. It is recommended to use the export feature to back up your data.

---

## 🌍 Multi-Language Support 🌐

The Song Lyrics Manager allows you to use the user interface in multiple languages. Current languages include:

- 🇹🇷 **Turkish** (default)
- 🇬🇧 **English**
- 🇩🇪 **German**
- 🇫🇷 **French**

### 🔽 How to Change Language?

1. Click on the **language flag** icon in the top-right corner.
2. Select the language you want from the dropdown list.
3. The selected language will be saved in your browser, and the app will instantly update all the text.

### 👨‍💻 Adding a New Language for Developers

The app's multilingual structure is based on the `translations` object in the `script.js` file. To add a new language:

1. Add a new language code (e.g., `es`, `it`, `ar`) along with the flag, language name, and translations in the `translations` object:
    ```js
    translations['es'] = {
      flag: '🇪🇸',
      name: 'Español',
      mySongsTitle: 'Mis Canciones',
      // ...
    };
    ```

2. Ensure you add all the text keys for the new language.

3. The app will automatically load the browser's last used language setting when the page is refreshed.

> **Note:** Language files are defined directly within JavaScript; no external JSON or translation system is used.

---
