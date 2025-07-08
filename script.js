// DOM Elements
const mainView = document.getElementById('main-view');
const lyricsView = document.getElementById('lyrics-view');
const addSongBtn = document.getElementById('add-song-btn');
const searchInput = document.getElementById('search-input');
const songListContainer = document.getElementById('song-list');
const noSongsMessage = document.getElementById('no-songs-message');
const backToListBtn = document.getElementById('back-to-list-btn');
const lyricsTitle = document.getElementById('lyrics-title');
const lyricsContent = document.getElementById('lyrics-content');

const addSongModal = document.getElementById('add-song-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const addSongForm = document.getElementById('add-song-form');
const songTitleInput = document.getElementById('song-title-input');
const songArtistInput = document.getElementById('song-artist-input');
const songLyricsInput = document.getElementById('song-lyrics-input');
const modalTitle = document.getElementById('modal-title');
const modalSubmitBtn = document.getElementById('modal-submit-btn');

const customModal = document.getElementById('custom-modal');
const customModalTitle = document.getElementById('custom-modal-title');
const customModalMessage = document.getElementById('custom-modal-message');
const customModalButtons = document.getElementById('custom-modal-buttons');

// Export/Import elements
const exportSongsBtn = document.getElementById('export-songs-btn');
const importSongsBtn = document.getElementById('import-songs-btn');
const importSongsInput = document.getElementById('import-songs-input');

// Language dropdown elements
const langDropdownBtn = document.getElementById('lang-dropdown-btn');
const langDropdownMenu = document.getElementById('lang-dropdown-menu');
const currentLangDisplay = document.getElementById('current-lang-display');

// Array to store songs
let songs = [];
let currentEditingSongTitle = null; // To keep track of the song being edited

// --- Language Support ---
const translations = {
  tr: {
    flag: '🇹🇷',
    name: 'Türkçe',
    mySongsTitle: 'Şarkılarım',
    exportButton: 'Dışa Aktar',
    importButton: 'İçe Aktar',
    addSongButton: 'Şarkı Ekle',
    searchPlaceholder: 'Şarkı ara...',
    noSongsMessage: 'Henüz şarkı yok. Yeni bir şarkı ekleyin!',
    noSongsFound: 'Aradığınız şarkı bulunamadı.',
    backButton: 'Geri Dön',
    addSongModalTitle: 'Yeni Şarkı Ekle',
    editSongModalTitle: 'Şarkıyı Düzenle',
    saveSongButton: 'Şarkıyı Kaydet',
    saveChangesButton: 'Değişiklikleri Kaydet',
    songTitleLabel: 'Şarkı Adı',
    songTitlePlaceholder: 'Şarkı adını girin',
    artistNameLabel: 'Sanatçı Adı (Opsiyonel)',
    artistNamePlaceholder: 'Sanatçı adını girin',
    songLyricsLabel: 'Şarkı Sözleri',
    songLyricsPlaceholder: 'Şarkı sözlerini buraya yapıştırın',
    editButton: 'Düzenle',
    deleteButton: 'Sil',
    lyricsMatchIndicator: '(Sözlerde Eşleşme)',
    deleteSongConfirmTitle: 'Şarkıyı Sil',
    deleteSongConfirmMessage: (title) =>
      `"${title}" şarkısını silmek istediğinizden emin misiniz?`,
    yesButton: 'Evet',
    cancelButton: 'İptal',
    warningTitle: 'Uyarı',
    duplicateSongMessage: 'Bu başlıkta bir şarkı zaten mevcut!',
    saveChangesConfirmTitle: 'Değişiklikleri Kaydet',
    saveChangesConfirmMessage: (title) =>
      `"${title}" şarkısındaki değişiklikleri kaydetmek istediğinizden emin misiniz?`,
    exportSuccessTitle: 'Dışa Aktarıldı',
    exportSuccessMessage:
      'Şarkı sözleriniz "sarki_sozleri.json" olarak dışa aktarıldı.',
    importErrorTitle: 'Hata',
    importErrorMessage:
      'İçe aktarılan dosya geçerli bir şarkı listesi içermiyor.',
    importSongsTitle: 'Şarkıları İçe Aktar',
    importChoiceMessage: 'Mevcut şarkılarla ne yapmak istersiniz?',
    mergeButton: 'Yenileri Ekle',
    overwriteButton: 'Üzerine Yaz',
    importSuccessOverwrite:
      'Şarkılar başarıyla içe aktarıldı (mevcutlar üzerine yazıldı).',
    importSuccessMerge: 'Yeni şarkılar mevcut listeye eklendi.',
    importCancelled: 'İptal Edildi',
    importCancelledMessage: 'Şarkı içe aktarma işlemi iptal edildi.',
    importGeneralError:
      'Şarkılar içe aktarılırken bir hata oluştu. Dosya bozuk veya geçersiz olabilir.',
    okButton: 'Tamam',
  },
  en: {
    flag: '🇬🇧',
    name: 'English',
    mySongsTitle: 'My Songs',
    exportButton: 'Export',
    importButton: 'Import',
    addSongButton: 'Add Song',
    searchPlaceholder: 'Search for a song...',
    noSongsMessage: 'No songs yet. Add a new song!',
    noSongsFound: 'No song found with your search criteria.',
    backButton: 'Back',
    addSongModalTitle: 'Add New Song',
    editSongModalTitle: 'Edit Song',
    saveSongButton: 'Save Song',
    saveChangesButton: 'Save Changes',
    songTitleLabel: 'Song Title',
    songTitlePlaceholder: 'Enter song title',
    artistNameLabel: 'Artist Name (Optional)',
    artistNamePlaceholder: 'Enter artist name',
    songLyricsLabel: 'Song Lyrics',
    songLyricsPlaceholder: 'Paste song lyrics here',
    editButton: 'Edit',
    deleteButton: 'Delete',
    lyricsMatchIndicator: '(Lyrics Match)',
    deleteSongConfirmTitle: 'Delete Song',
    deleteSongConfirmMessage: (title) =>
      `Are you sure you want to delete "${title}"?`,
    yesButton: 'Yes',
    cancelButton: 'Cancel',
    warningTitle: 'Warning',
    duplicateSongMessage: 'A song with this title already exists!',
    saveChangesConfirmTitle: 'Save Changes',
    saveChangesConfirmMessage: (title) =>
      `Are you sure you want to save changes to "${title}"?`,
    exportSuccessTitle: 'Exported',
    exportSuccessMessage:
      'Your lyrics have been exported as "sarki_sozleri.json".',
    importErrorTitle: 'Error',
    importErrorMessage: 'The imported file does not contain a valid song list.',
    importSongsTitle: 'Import Songs',
    importChoiceMessage: 'What would you like to do with existing songs?',
    mergeButton: 'Add New',
    overwriteButton: 'Overwrite',
    importSuccessOverwrite: 'Songs successfully imported (overwrote existing).',
    importSuccessMerge: 'New songs added to the existing list.',
    importCancelled: 'Cancelled',
    importCancelledMessage: 'Song import operation cancelled.',
    importGeneralError:
      'An error occurred while importing songs. The file might be corrupted or invalid.',
    okButton: 'OK',
  },
  de: {
    flag: '🇩🇪',
    name: 'Deutsch',
    mySongsTitle: 'Meine Lieder',
    exportButton: 'Exportieren',
    importButton: 'Importieren',
    addSongButton: 'Lied hinzufügen',
    searchPlaceholder: 'Lied suchen...',
    noSongsMessage: 'Noch keine Lieder. Fügen Sie ein neues Lied hinzu!',
    noSongsFound: 'Kein Lied mit Ihren Suchkriterien gefunden.',
    backButton: 'Zurück',
    addSongModalTitle: 'Neues Lied hinzufügen',
    editSongModalTitle: 'Lied bearbeiten',
    saveSongButton: 'Lied speichern',
    saveChangesButton: 'Änderungen speichern',
    songTitleLabel: 'Liedtitel',
    songTitlePlaceholder: 'Liedtitel eingeben',
    artistNameLabel: 'Künstlername (Optional)',
    artistNamePlaceholder: 'Künstlernamen eingeben',
    songLyricsLabel: 'Liedtext',
    songLyricsPlaceholder: 'Liedtext hier einfügen',
    editButton: 'Bearbeiten',
    deleteButton: 'Löschen',
    lyricsMatchIndicator: '(Textübereinstimmung)',
    deleteSongConfirmTitle: 'Lied löschen',
    deleteSongConfirmMessage: (title) =>
      `Möchten Sie "${title}" wirklich löschen?`,
    yesButton: 'Ja',
    cancelButton: 'Abbrechen',
    warningTitle: 'Warnung',
    duplicateSongMessage: 'Ein Lied mit diesem Titel existiert bereits!',
    saveChangesConfirmTitle: 'Änderungen speichern',
    saveChangesConfirmMessage: (title) =>
      `Möchten Sie die Änderungen an "${title}" wirklich speichern?`,
    exportSuccessTitle: 'Exportiert',
    exportSuccessMessage:
      'Ihre Liedtexte wurden als "sarki_sozleri.json" exportiert.',
    importErrorTitle: 'Fehler',
    importErrorMessage:
      'Die importierte Datei enthält keine gültige Liedliste.',
    importSongsTitle: 'Lieder importieren',
    importChoiceMessage: 'Was möchten Sie mit vorhandenen Liedern tun?',
    mergeButton: 'Neue hinzufügen',
    overwriteButton: 'Überschreiben',
    importSuccessOverwrite:
      'Lieder erfolgreich importiert (bestehende überschrieben).',
    importSuccessMerge: 'Neue Lieder zur bestehenden Liste hinzugefügt.',
    importCancelled: 'Abgebrochen',
    importCancelledMessage: 'Der Liedimport wurde abgebrochen.',
    importGeneralError:
      'Beim Importieren von Liedern ist ein Fehler aufgetreten. Die Datei ist möglicherweise beschädigt oder ungültig.',
    okButton: 'OK',
  },
  fr: {
    flag: '🇫🇷',
    name: 'Français',
    mySongsTitle: 'Mes Chansons',
    exportButton: 'Exporter',
    importButton: 'Importer',
    addSongButton: 'Ajouter une chanson',
    searchPlaceholder: 'Rechercher une chanson...',
    noSongsMessage: 'Pas encore de chansons. Ajoutez une nouvelle chanson !',
    noSongsFound: 'Aucune chanson trouvée avec vos critères de recherche.',
    backButton: 'Retour',
    addSongModalTitle: 'Ajouter une nouvelle chanson',
    editSongModalTitle: 'Modifier la chanson',
    saveSongButton: 'Enregistrer la chanson',
    saveChangesButton: 'Enregistrer les modifications',
    songTitleLabel: 'Titre de la chanson',
    songTitlePlaceholder: 'Entrez le titre de la chanson',
    artistNameLabel: "Nom de l'artiste (Facultatif)",
    artistNamePlaceholder: "Entrez le nom de l'artiste",
    songLyricsLabel: 'Paroles de la chanson',
    songLyricsPlaceholder: 'Collez les paroles de la chanson ici',
    editButton: 'Modifier',
    deleteButton: 'Supprimer',
    lyricsMatchIndicator: '(Correspondance des paroles)',
    deleteSongConfirmTitle: 'Supprimer la chanson',
    deleteSongConfirmMessage: (title) =>
      `Voulez-vous vraiment supprimer "${title}" ?`,
    yesButton: 'Oui',
    cancelButton: 'Annuler',
    warningTitle: 'Avertissement',
    duplicateSongMessage: 'Une chanson avec ce titre existe déjà !',
    saveChangesConfirmTitle: 'Enregistrer les modifications',
    saveChangesConfirmMessage: (title) =>
      `Voulez-vous vraiment enregistrer les modifications de "${title}" ?`,
    exportSuccessTitle: 'Exporté',
    exportSuccessMessage:
      'Vos paroles ont été exportées sous le nom "sarki_sozleri.json".',
    importErrorTitle: 'Erreur',
    importErrorMessage:
      'Le fichier importé ne contient pas une liste de chansons valide.',
    importSongsTitle: 'Importer des chansons',
    importChoiceMessage:
      'Que souhaitez-vous faire avec les chansons existantes ?',
    mergeButton: 'Ajouter les nouvelles',
    overwriteButton: 'Écraser',
    importSuccessOverwrite:
      'Chansons importées avec succès (existantes écrasées).',
    importSuccessMerge: 'Nouvelles chansons ajoutées à la liste existante.',
    importCancelled: 'Annulé',
    importCancelledMessage: "L'importation des chansons a été annulée.",
    importGeneralError:
      "Une erreur est survenue lors de l'importation des chansons. Le fichier peut être corrompu ou invalide.",
    okButton: 'OK',
  },
};

let currentLang = localStorage.getItem('lang') || 'tr'; // Default to Turkish

// Helper function to get translated text
const getTranslation = (key, ...args) => {
  const text = translations[currentLang][key];
  if (typeof text === 'function') {
    return text(...args);
  }
  return text || key; // Fallback to key if translation not found
};

// Function to populate the language dropdown menu
const populateLanguageDropdown = () => {
  langDropdownMenu.innerHTML = ''; // Clear existing options
  for (const langCode in translations) {
    const langData = translations[langCode];
    const listItem = document.createElement('li');
    listItem.classList.add(
      'px-4',
      'py-2',
      'hover:bg-gray-100',
      'cursor-pointer',
      'rounded-md'
    );
    listItem.dataset.lang = langCode;
    listItem.innerHTML = `${langData.flag} ${langData.name}`;
    langDropdownMenu.appendChild(listItem);
  }
};

// Function to apply translations to all elements with data-key attribute
const applyTranslations = () => {
  document.querySelectorAll('[data-key]').forEach((element) => {
    const key = element.dataset.key;
    const translation = getTranslation(key);

    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      if (element.placeholder !== undefined) {
        // Check if placeholder exists
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    } else {
      element.textContent = translation;
    }
  });

  // Specific updates for dynamic placeholders or titles that aren't directly data-key
  searchInput.placeholder = getTranslation('searchPlaceholder');
  songTitleInput.placeholder = getTranslation('songTitlePlaceholder');
  songArtistInput.placeholder = getTranslation('artistNamePlaceholder');
  songLyricsInput.placeholder = getTranslation('songLyricsPlaceholder');

  // Update the display of the current language button
  currentLangDisplay.textContent = translations[currentLang].flag;

  // Re-render song list to update dynamic text within song items
  renderSongList(searchInput.value);
};

// Function to set language and re-apply translations
const setLanguage = (lang) => {
  currentLang = lang;
  localStorage.setItem('lang', currentLang);
  applyTranslations();
  // Close dropdown after selection
  langDropdownMenu.classList.add('hidden');
};

// Toggle language dropdown visibility
langDropdownBtn.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent click from bubbling to document
  langDropdownMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (
    !langDropdownMenu.contains(event.target) &&
    !langDropdownBtn.contains(event.target)
  ) {
    langDropdownMenu.classList.add('hidden');
  }
});

// Event delegation for language selection in dropdown
langDropdownMenu.addEventListener('click', (event) => {
  const selectedLang = event.target.dataset.lang;
  if (selectedLang) {
    setLanguage(selectedLang);
  }
});
// --- End Language Support ---

// Helper function to convert string to Capital Case (Title Case) with Turkish locale support
const toCapitalCase = (str) => {
  if (!str) return '';
  // Use current language for localeCompare to ensure correct sorting and casing
  const locale = currentLang === 'tr' ? 'tr' : 'en'; // Fallback to 'en' for other languages
  return str
    .toLocaleLowerCase(locale)
    .split(' ')
    .map((word) => {
      if (word.length === 0) return '';
      return word.charAt(0).toLocaleUpperCase(locale) + word.slice(1);
    })
    .join(' ');
};

// Function to load songs from Local Storage
const loadSongs = () => {
  const storedSongs = localStorage.getItem('songs');
  if (storedSongs) {
    songs = JSON.parse(storedSongs);
  }
};

// Function to save songs to Local Storage
const saveSongs = () => {
  localStorage.setItem('songs', JSON.stringify(songs));
};

// Function to show custom modal (alert or confirm)
// buttonsConfig is an array of { text: string, value: any, className: string[] }
const showCustomModal = (title, message, buttonsConfig) => {
  customModalTitle.textContent = title;
  customModalMessage.textContent = message;

  // Clear existing buttons
  customModalButtons.innerHTML = '';

  customModal.classList.remove('hidden');
  customModal.querySelector('div').classList.remove('scale-95', 'opacity-0');
  customModal.querySelector('div').classList.add('scale-100', 'opacity-100');

  return new Promise((resolve) => {
    buttonsConfig.forEach((btnConfig) => {
      const button = document.createElement('button');
      button.textContent = btnConfig.text;
      button.classList.add(...(btnConfig.className || []));
      button.addEventListener(
        'click',
        () => {
          closeCustomModal();
          resolve(btnConfig.value);
        },
        {
          once: true,
        }
      ); // Ensure event listener is removed after click
      customModalButtons.appendChild(button);
    });

    // If no confirm/cancel buttons, auto-close after a delay (for alerts)
    if (buttonsConfig.length === 1 && buttonsConfig[0].value === true) {
      // Assuming a single 'OK' button for alerts
      setTimeout(() => {
        if (!customModal.classList.contains('hidden')) {
          closeCustomModal();
          resolve(true); // Resolve as true for auto-closed alerts
        }
      }, 2000);
    }
  });
};

// Function to close custom modal
const closeCustomModal = () => {
  customModal.querySelector('div').classList.remove('scale-100', 'opacity-100');
  customModal.querySelector('div').classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    customModal.classList.add('hidden');
    customModalButtons.innerHTML = ''; // Clear buttons after closing
  }, 300);
};

// Function to open Add/Edit Song Modal
const openAddEditModal = (song = null) => {
  addSongForm.reset();
  currentEditingSongTitle = null;

  if (song) {
    modalTitle.textContent = getTranslation('editSongModalTitle');
    modalSubmitBtn.textContent = getTranslation('saveChangesButton');
    songTitleInput.value = song.title;
    songArtistInput.value = song.artist || '';
    songLyricsInput.value = song.lyrics;
    currentEditingSongTitle = song.title;
  } else {
    modalTitle.textContent = getTranslation('addSongModalTitle');
    modalSubmitBtn.textContent = getTranslation('saveSongButton');
  }

  addSongModal.classList.remove('hidden');
  addSongModal.querySelector('div').classList.remove('scale-95', 'opacity-0');
  addSongModal.querySelector('div').classList.add('scale-100', 'opacity-100');
  songTitleInput.focus();
};

// Function to render the song list
const renderSongList = (filter = '') => {
  songListContainer.innerHTML = '';
  // Use current language for locale-specific filtering
  const locale = currentLang === 'tr' ? 'tr' : 'en'; // Fallback to 'en' for other languages
  const lowerCaseFilter = filter.toLocaleLowerCase(locale);

  let songsToDisplay = [];
  let lyricsMatched = false;

  let primaryFilteredSongs = songs.filter(
    (song) =>
      song.title.toLocaleLowerCase(locale).includes(lowerCaseFilter) ||
      (song.artist &&
        song.artist.toLocaleLowerCase(locale).includes(lowerCaseFilter))
  );

  if (primaryFilteredSongs.length > 0) {
    songsToDisplay = primaryFilteredSongs;
  } else if (lowerCaseFilter.length > 0) {
    songsToDisplay = songs.filter((song) =>
      song.lyrics.toLocaleLowerCase(locale).includes(lowerCaseFilter)
    );
    lyricsMatched = true;
  } else {
    songsToDisplay = [...songs];
  }

  songsToDisplay.sort((a, b) => a.title.localeCompare(b.title, locale));

  if (songsToDisplay.length === 0) {
    noSongsMessage.classList.remove('hidden');
    if (filter) {
      noSongsMessage.textContent = getTranslation('noSongsFound');
    } else {
      noSongsMessage.textContent = getTranslation('noSongsMessage');
    }
  } else {
    noSongsMessage.classList.add('hidden');
    let currentFirstLetter = '';

    songsToDisplay.forEach((song) => {
      const firstLetter = song.title.charAt(0).toLocaleUpperCase(locale);

      if (firstLetter !== currentFirstLetter) {
        currentFirstLetter = firstLetter;
        const letterHeading = document.createElement('h3');
        letterHeading.classList.add(
          'text-xl',
          'sm:text-2xl',
          'font-bold',
          'text-gray-700',
          'mt-6',
          'mb-2',
          'pb-1',
          'border-b-2',
          'border-blue-300'
        );
        letterHeading.textContent = currentFirstLetter;
        songListContainer.appendChild(letterHeading);
      }

      const songItem = document.createElement('div');
      songItem.classList.add(
        'song-item',
        'bg-gray-100',
        'p-4',
        'sm:p-5',
        'rounded-lg',
        'shadow-sm',
        'flex',
        'flex-col',
        'sm:flex-row',
        'justify-between',
        'items-start',
        'sm:items-center',
        'cursor-pointer',
        'hover:bg-gray-200',
        'transition-all',
        'duration-200',
        'ease-in-out',
        'transform',
        'mb-2'
      );

      let lyricsMatchIndicator = '';
      let matchingLyricLinesHtml = ''; // New variable for matching lines

      if (
        lyricsMatched &&
        song.lyrics.toLocaleLowerCase(locale).includes(lowerCaseFilter)
      ) {
        lyricsMatchIndicator = `<span class="text-xs text-blue-600 font-medium ml-2">${getTranslation(
          'lyricsMatchIndicator'
        )}</span>`;

        // Find and display matching lyric lines
        const lyricLines = song.lyrics.split('\n');
        const matchedLines = [];
        let linesCount = 0;
        for (const line of lyricLines) {
          if (line.toLocaleLowerCase(locale).includes(lowerCaseFilter)) {
            matchedLines.push(line.trim());
            linesCount++;
            if (linesCount >= 2) break; // Limit to first 2 matching lines
          }
        }
        if (matchedLines.length > 0) {
          matchingLyricLinesHtml = `
                                <div class="text-xs text-gray-500 mt-1">
                                    ${matchedLines
                                      .map(
                                        (line) =>
                                          `<p class="truncate">${line}</p>`
                                      )
                                      .join('')}
                                </div>
                            `;
        }
      }

      const songInfoHtml = `
                        <div class="flex flex-col mb-2 sm:mb-0">
                            <span class="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
                                ${song.title}
                                ${lyricsMatchIndicator}
                            </span>
                            ${
                              song.artist
                                ? `<span class="text-sm text-gray-600">${song.artist}</span>`
                                : ''
                            }
                            ${matchingLyricLinesHtml} <!-- Add the matching lines here -->
                        </div>
                        <div class="flex space-x-2 mt-2 sm:mt-0">
                            <button class="edit-song-btn bg-yellow-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base hover:bg-yellow-600 transition-colors duration-200" data-title="${
                              song.title
                            }">${getTranslation('editButton')}</button>
                            <button class="delete-song-btn bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base hover:bg-red-600 transition-colors duration-200" data-title="${
                              song.title
                            }">${getTranslation('deleteButton')}</button>
                        </div>
                    `;
      songItem.innerHTML = songInfoHtml;

      // Add event listener for the entire song item (to view lyrics)
      songItem.addEventListener('click', (e) => {
        // Ensure click on buttons inside doesn't trigger lyrics view
        if (
          !e.target.closest('.edit-song-btn') &&
          !e.target.closest('.delete-song-btn')
        ) {
          viewLyrics(song.title);
        }
      });

      // Add event listener for the edit button
      songItem.querySelector('.edit-song-btn').addEventListener('click', () => {
        openAddEditModal(song);
      });

      songListContainer.appendChild(songItem);
    });
  }
};

// Function to view lyrics
const viewLyrics = (title) => {
  const song = songs.find((s) => s.title === title);
  if (song) {
    lyricsTitle.textContent = song.title;
    lyricsContent.textContent = song.lyrics;
    mainView.classList.add('hidden');
    lyricsView.classList.remove('hidden');
  }
};

// Function to delete a song
const deleteSong = async (title) => {
  const confirmed = await showCustomModal(
    getTranslation('deleteSongConfirmTitle'),
    getTranslation('deleteSongConfirmMessage', title),
    [
      {
        text: getTranslation('yesButton'),
        value: true,
        className: [
          'bg-blue-500',
          'text-white',
          'px-5',
          'py-2',
          'rounded-lg',
          'hover:bg-blue-600',
          'transition-colors',
          'font-semibold',
          'text-base',
        ],
      },
      {
        text: getTranslation('cancelButton'),
        value: false,
        className: [
          'bg-gray-300',
          'text-gray-800',
          'px-5',
          'py-2',
          'rounded-lg',
          'hover:bg-gray-400',
          'transition-colors',
          'font-semibold',
          'text-base',
        ],
      },
    ]
  );
  if (confirmed) {
    songs = songs.filter((song) => song.title !== title);
    saveSongs();
    renderSongList(searchInput.value);
  }
};

// Event Listeners

// Show Add Song Modal (initial click)
addSongBtn.addEventListener('click', () => openAddEditModal());

// Close Add Song Modal
closeModalBtn.addEventListener('click', () => {
  addSongModal
    .querySelector('div')
    .classList.remove('scale-100', 'opacity-100');
  addSongModal.querySelector('div').classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    addSongModal.classList.add('hidden');
    addSongForm.reset();
  }, 300);
});

// Submit Add Song Form
addSongForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = toCapitalCase(songTitleInput.value.trim());
  const artist = toCapitalCase(songArtistInput.value.trim());
  const lyrics = songLyricsInput.value.trim();

  if (title && lyrics) {
    // Use current language for locale-specific comparison
    const locale = currentLang === 'tr' ? 'tr' : 'en';
    if (currentEditingSongTitle) {
      // Editing an existing song
      const songIndex = songs.findIndex(
        (song) => song.title === currentEditingSongTitle
      );
      if (songIndex !== -1) {
        // Check for duplicate title if title is changed during edit
        if (
          title.toLocaleLowerCase(locale) !==
            currentEditingSongTitle.toLocaleLowerCase(locale) &&
          songs.some(
            (song) =>
              song.title.toLocaleLowerCase(locale) ===
              title.toLocaleLowerCase(locale)
          )
        ) {
          await showCustomModal(
            getTranslation('warningTitle'),
            getTranslation('duplicateSongMessage'),
            [
              {
                text: getTranslation('okButton'),
                value: true,
                className: [
                  'bg-blue-500',
                  'text-white',
                  'px-5',
                  'py-2',
                  'rounded-lg',
                  'hover:bg-blue-600',
                  'transition-colors',
                  'font-semibold',
                  'text-base',
                ],
              },
            ]
          );
          return;
        }

        const confirmedEdit = await showCustomModal(
          getTranslation('saveChangesConfirmTitle'),
          getTranslation('saveChangesConfirmMessage', currentEditingSongTitle),
          [
            {
              text: getTranslation('yesButton'),
              value: true,
              className: [
                'bg-blue-500',
                'text-white',
                'px-5',
                'py-2',
                'rounded-lg',
                'hover:bg-blue-600',
                'transition-colors',
                'font-semibold',
                'text-base',
              ],
            },
            {
              text: getTranslation('cancelButton'),
              value: false,
              className: [
                'bg-gray-300',
                'text-gray-800',
                'px-5',
                'py-2',
                'rounded-lg',
                'hover:bg-gray-400',
                'transition-colors',
                'font-semibold',
                'text-base',
              ],
            },
          ]
        );

        if (confirmedEdit) {
          songs[songIndex] = {
            title,
            artist,
            lyrics,
          };
          saveSongs();
          renderSongList(searchInput.value);
          closeModalBtn.click();
        }
      }
    } else {
      // Adding a new song
      if (
        songs.some(
          (song) =>
            song.title.toLocaleLowerCase(locale) ===
            title.toLocaleLowerCase(locale)
        )
      ) {
        await showCustomModal(
          getTranslation('warningTitle'),
          getTranslation('duplicateSongMessage'),
          [
            {
              text: getTranslation('okButton'),
              value: true,
              className: [
                'bg-blue-500',
                'text-white',
                'px-5',
                'py-2',
                'rounded-lg',
                'hover:bg-blue-600',
                'transition-colors',
                'font-semibold',
                'text-base',
              ],
            },
          ]
        );
        return;
      }
      songs.push({
        title,
        artist,
        lyrics,
      });
      saveSongs();
      renderSongList(searchInput.value);
      closeModalBtn.click();
    }
  }
});

// Search Input Event
searchInput.addEventListener('input', (e) => {
  renderSongList(e.target.value);
});

// Back to List Button
backToListBtn.addEventListener('click', () => {
  lyricsView.classList.add('hidden');
  mainView.classList.remove('hidden');
});

// Event delegation for delete buttons
songListContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-song-btn')) {
    const songTitleToDelete = e.target.dataset.title;
    deleteSong(songTitleToDelete);
  }
});

// Export Songs Functionality
exportSongsBtn.addEventListener('click', () => {
  const dataStr = JSON.stringify(songs, null, 2);
  const blob = new Blob([dataStr], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sarki_sozleri.json'; // Filename remains consistent
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showCustomModal(
    getTranslation('exportSuccessTitle'),
    getTranslation('exportSuccessMessage'),
    [
      {
        text: getTranslation('okButton'),
        value: true,
        className: [
          'bg-blue-500',
          'text-white',
          'px-5',
          'py-2',
          'rounded-lg',
          'hover:bg-blue-600',
          'transition-colors',
          'font-semibold',
          'text-base',
        ],
      },
    ]
  );
});

// Import Songs Functionality
importSongsBtn.addEventListener('click', () => {
  importSongsInput.click();
});

importSongsInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const importedSongs = JSON.parse(e.target.result);
        if (!Array.isArray(importedSongs)) {
          await showCustomModal(
            getTranslation('importErrorTitle'),
            getTranslation('importErrorMessage'),
            [
              {
                text: getTranslation('okButton'),
                value: true,
                className: [
                  'bg-blue-500',
                  'text-white',
                  'px-5',
                  'py-2',
                  'rounded-lg',
                  'hover:bg-blue-600',
                  'transition-colors',
                  'font-semibold',
                  'text-base',
                ],
              },
            ]
          );
          return;
        }

        const importChoice = await showCustomModal(
          getTranslation('importSongsTitle'),
          getTranslation('importChoiceMessage'),
          [
            {
              text: getTranslation('mergeButton'),
              value: 'merge',
              className: [
                'bg-blue-500',
                'text-white',
                'px-5',
                'py-2',
                'rounded-lg',
                'hover:bg-blue-600',
                'transition-colors',
                'font-semibold',
                'text-base',
              ],
            },
            {
              text: getTranslation('overwriteButton'),
              value: 'overwrite',
              className: [
                'bg-red-500',
                'text-white',
                'px-5',
                'py-2',
                'rounded-lg',
                'hover:bg-red-600',
                'transition-colors',
                'font-semibold',
                'text-base',
              ],
            },
            {
              text: getTranslation('cancelButton'),
              value: 'cancel',
              className: [
                'bg-gray-300',
                'text-gray-800',
                'px-5',
                'py-2',
                'rounded-lg',
                'hover:bg-gray-400',
                'transition-colors',
                'font-semibold',
                'text-base',
              ],
            },
          ]
        );

        if (importChoice === 'overwrite') {
          songs = importedSongs;
          await showCustomModal(
            getTranslation('okButton'),
            getTranslation('importSuccessOverwrite'),
            [
              {
                text: getTranslation('okButton'),
                value: true,
                className: [
                  'bg-blue-500',
                  'text-white',
                  'px-5',
                  'py-2',
                  'rounded-lg',
                  'hover:bg-blue-600',
                  'transition-colors',
                  'font-semibold',
                  'text-base',
                ],
              },
            ]
          );
        } else if (importChoice === 'merge') {
          // Use current language for locale-specific comparison
          const locale = currentLang === 'tr' ? 'tr' : 'en';
          const existingTitles = new Set(
            songs.map((s) => s.title.toLocaleLowerCase(locale))
          );
          const newSongsToAdd = importedSongs.filter(
            (importedSong) =>
              !existingTitles.has(importedSong.title.toLocaleLowerCase(locale))
          );
          songs.push(...newSongsToAdd);
          await showCustomModal(
            getTranslation('okButton'),
            getTranslation('importSuccessMerge'),
            [
              {
                text: getTranslation('okButton'),
                value: true,
                className: [
                  'bg-blue-500',
                  'text-white',
                  'px-5',
                  'py-2',
                  'rounded-lg',
                  'hover:bg-blue-600',
                  'transition-colors',
                  'font-semibold',
                  'text-base',
                ],
              },
            ]
          );
        } else if (importChoice === 'cancel') {
          await showCustomModal(
            getTranslation('importCancelled'),
            getTranslation('importCancelledMessage'),
            [
              {
                text: getTranslation('okButton'),
                value: true,
                className: [
                  'bg-blue-500',
                  'text-white',
                  'px-5',
                  'py-2',
                  'rounded-lg',
                  'hover:bg-blue-600',
                  'transition-colors',
                  'font-semibold',
                  'text-base',
                ],
              },
            ]
          );
        }
        saveSongs();
        renderSongList(searchInput.value);
      } catch (error) {
        console.error('Error importing songs:', error);
        await showCustomModal(
          getTranslation('importErrorTitle'),
          getTranslation('importGeneralError'),
          [
            {
              text: getTranslation('okButton'),
              value: true,
              className: [
                'bg-blue-500',
                'text-white',
                'px-5',
                'py-2',
                'rounded-lg',
                'hover:bg-blue-600',
                'transition-colors',
                'font-semibold',
                'text-base',
              ],
            },
          ]
        );
      } finally {
        importSongsInput.value = ''; // Clear the file input
      }
    };
    reader.readAsText(file);
  }
});

// Initial load and render
window.onload = () => {
  loadSongs();
  populateLanguageDropdown(); // Populate dropdown on load
  setLanguage(currentLang); // Apply initial language
};


// Check if 'songs' already exists in localStorage
if (!localStorage.getItem('songs')) {
    // If 'songs' doesn't exist, initialize it as an empty array
    localStorage.setItem('songs', JSON.stringify([]));
}

