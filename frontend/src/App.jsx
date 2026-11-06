

import { useRef, useState } from 'react'

import './App.css'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8001'

const translations = {

  English: {

    subtitle: 'Discover your skills. Find your opportunities in Switzerland.',

    formTitle: 'Analyze your professional profile',

    upload: 'Upload your CV (PDF)',

    fileHint: 'Maximum file size: 5 MB',

    or: 'OR',

    experience: 'Describe your professional experience',

    placeholder: 'Describe your experience, skills, technologies and previous jobs...',

    language: 'Result language',

    analyze: 'Analyze my profile',

    analyzing: 'Analyzing your profile...',

    profile: 'Your professional profile',

    identified: 'Identified skills',

    matches: 'Career matches',
    targetRole: 'Target profession',
    chooseRole: 'Choose a profession',
    selectedDirection: 'Selected direction',
    focusSkills: 'Skills to focus on',
    chooseThisRole: 'Choose this profession',
    selected: 'Selected',

    recommendations: 'Recommendations',

    matching: 'Matching skills',

    missing: 'Skills to develop',

    why: 'Why this job matches',

    whyText: (count) => `Your profile demonstrates ${count} relevant skill${count === 1 ? '' : 's'} for this position.`,

    gapText: (count) => `${count} additional skill${count === 1 ? '' : 's'} could improve your match.`,

    remove: 'Remove',

    empty: 'No skills identified.',

    noMatches: 'No matching professions found. Try adding more details about your experience.',

    errorFile: 'Please select a PDF file.',

    errorSize: 'File is too large. Maximum size is 5 MB.',

    errorEmpty: 'Please upload a PDF or describe your experience.',

    errorConnection: 'Could not connect to the server. Please try again.',

    errorTitle: 'Something went wrong',

    source: 'Analysis source',

    pdf: 'PDF CV',

    text: 'Manual description',

  },



  Français: {

    subtitle: 'Découvrez vos compétences. Trouvez des opportunités en Suisse.',

    formTitle: 'Analysez votre profil professionnel',

    upload: 'Télécharger votre CV (PDF)',

    fileHint: 'Taille maximale : 5 Mo',

    or: 'OU',

    experience: 'Décrivez votre expérience professionnelle',

    placeholder: 'Décrivez votre expérience, vos compétences, vos technologies et vos emplois précédents...',

    language: 'Langue des résultats',

    analyze: 'Analyser mon profil',

    analyzing: 'Analyse en cours...',

    profile: 'Votre profil professionnel',

    identified: 'Compétences identifiées',

    matches: 'Métiers correspondants',
    targetRole: 'Métier cible',
    chooseRole: 'Choisissez un métier',
    selectedDirection: 'Orientation choisie',
    focusSkills: 'Compétences à développer',
    chooseThisRole: 'Choisir ce métier',
    selected: 'Choisi',

    recommendations: 'Recommandations',

    matching: 'Compétences correspondantes',

    missing: 'Compétences à développer',

    why: 'Pourquoi ce métier vous correspond',

    whyText: (count) => `Votre profil démontre ${count} compétence(s) pertinente(s) pour ce métier.`,

    gapText: (count) => `${count} compétence(s) supplémentaire(s) pourrai(en)t améliorer votre correspondance.`,

    remove: 'Supprimer',

    empty: 'Aucune compétence identifiée.',

    noMatches: 'Aucun métier correspondant. Ajoutez plus de détails sur votre expérience.',

    errorFile: 'Veuillez sélectionner un fichier PDF.',

    errorSize: 'Le fichier est trop volumineux. Taille maximale : 5 Mo.',

    errorEmpty: 'Veuillez télécharger un PDF ou décrire votre expérience.',

    errorConnection: 'Impossible de contacter le serveur. Veuillez réessayer.',

    errorTitle: 'Une erreur est survenue',

    source: 'Source de l’analyse',

    pdf: 'CV PDF',

    text: 'Description manuelle',

  },



  Deutsch: {

    subtitle: 'Entdecken Sie Ihre Fähigkeiten. Finden Sie berufliche Chancen in der Schweiz.',

    formTitle: 'Analysieren Sie Ihr berufliches Profil',

    upload: 'Lebenslauf hochladen (PDF)',

    fileHint: 'Maximale Dateigrösse: 5 MB',

    or: 'ODER',

    experience: 'Beschreiben Sie Ihre Berufserfahrung',

    placeholder: 'Beschreiben Sie Ihre Erfahrung, Fähigkeiten, Technologien und bisherigen Tätigkeiten...',

    language: 'Sprache der Ergebnisse',

    analyze: 'Mein Profil analysieren',

    analyzing: 'Profil wird analysiert...',

    profile: 'Ihr berufliches Profil',

    identified: 'Erkannte Fähigkeiten',

    matches: 'Passende Berufe',
    targetRole: 'Zielberuf',
    chooseRole: 'Wählen Sie einen Beruf',
    selectedDirection: 'Gewählte Richtung',
    focusSkills: 'Zu entwickelnde Fähigkeiten',
    chooseThisRole: 'Diesen Beruf wählen',
    selected: 'Ausgewählt',

    recommendations: 'Empfehlungen',

    matching: 'Passende Fähigkeiten',

    missing: 'Zu entwickelnde Fähigkeiten',

    why: 'Warum dieser Beruf zu Ihnen passt',

    whyText: (count) => `Ihr Profil weist ${count} relevante Fähigkeit(en) für diese Stelle auf.`,

    gapText: (count) => `${count} weitere Fähigkeit(en) könnten Ihre Übereinstimmung verbessern.`,

    remove: 'Entfernen',

    empty: 'Keine Fähigkeiten erkannt.',

    noMatches: 'Keine passenden Berufe gefunden. Ergänzen Sie weitere Angaben zu Ihrer Erfahrung.',

    errorFile: 'Bitte wählen Sie eine PDF-Datei aus.',

    errorSize: 'Die Datei ist zu gross. Maximale Grösse: 5 MB.',

    errorEmpty: 'Bitte laden Sie ein PDF hoch oder beschreiben Sie Ihre Erfahrung.',

    errorConnection: 'Verbindung zum Server nicht möglich. Bitte versuchen Sie es erneut.',

    errorTitle: 'Ein Fehler ist aufgetreten',

    source: 'Analysequelle',

    pdf: 'PDF-Lebenslauf',

    text: 'Manuelle Beschreibung',

  },



  Українська: {

    subtitle: 'Відкрийте свої навички. Знайдіть можливості для роботи у Швейцарії.',

    formTitle: 'Аналіз вашого професійного профілю',

    upload: 'Завантажте резюме (PDF)',

    fileHint: 'Максимальний розмір файлу: 5 МБ',

    or: 'АБО',

    experience: 'Опишіть свій професійний досвід',

    placeholder: 'Опишіть свій досвід, навички, технології та попередні місця роботи...',

    language: 'Мова результатів',

    analyze: 'Проаналізувати мій профіль',

    analyzing: 'Аналізуємо ваш профіль...',

    profile: 'Ваш професійний профіль',

    identified: 'Визначені навички',

    matches: 'Відповідні професії',
    targetRole: 'Цільова професія',
    chooseRole: 'Оберіть професію',
    selectedDirection: 'Обраний напрям',
    focusSkills: 'Навички для розвитку',
    chooseThisRole: 'Обрати цю професію',
    selected: 'Обрано',

    recommendations: 'Рекомендації',

    matching: 'Відповідні навички',

    missing: 'Навички, які варто розвинути',

    why: 'Чому ця професія вам підходить',

    whyText: (count) => `Ваш профіль підтверджує ${count} навичок, важливих для цієї професії.`,

    gapText: (count) => `Ще ${count} навичок можуть підвищити відповідність вашого профілю.`,

    remove: 'Видалити',

    empty: 'Навички не визначені.',

    noMatches: 'Відповідних професій не знайдено. Додайте більше інформації про свій досвід.',

    errorFile: 'Будь ласка, виберіть PDF-файл.',

    errorSize: 'Файл завеликий. Максимальний розмір: 5 МБ.',

    errorEmpty: 'Завантажте PDF або опишіть свій професійний досвід.',

    errorConnection: 'Не вдалося підключитися до сервера. Спробуйте ще раз.',

    errorTitle: 'Сталася помилка',

    source: 'Джерело аналізу',

    pdf: 'Резюме PDF',

    text: 'Текстовий опис',

  },

}



function App() {

  const [experience, setExperience] = useState('')

  const [language, setLanguage] = useState('English')

  const [file, setFile] = useState(null)

  const [loading, setLoading] = useState(false)

  const [result, setResult] = useState(null)
  const [selectedJob, setSelectedJob] = useState('')

  const [error, setError] = useState('')

  const fileInputRef = useRef(null)



  const t = translations[language]



  async function analyzeProfile(e) {

    e.preventDefault()



    if (!file && !experience.trim()) {

      setError(t.errorEmpty)

      return

    }



    setLoading(true)

    setError('')

    setResult(null)



    try {

      let response



      if (file) {

        const formData = new FormData()

        formData.append('file', file)

        formData.append('language', language)



        response = await fetch(

          '${API_BASE_URL}/api/analyze-cv',

          {

            method: 'POST',

            body: formData,

          }

        )

      } else {

        response = await fetch(

          '${API_BASE_URL}/api/analyze-profile',

          {

            method: 'POST',

            headers: {

              'Content-Type': 'application/json',

            },

            body: JSON.stringify({ experience, language }),

          }

        )

      }



      const data = await response.json()



      if (!response.ok) {

        throw new Error(data.detail || t.errorConnection)

      }



      setResult(data)
      setSelectedJob(data.job_matches?.[0]?.title || '')

    } catch (err) {

      setError(err.message || t.errorConnection)

    } finally {

      setLoading(false)

    }

  }



  function handleFileChange(e) {

    const selectedFile = e.target.files[0]



    if (!selectedFile) {

      setFile(null)

      return

    }



    if (

      selectedFile.type !== 'application/pdf' &&

      !selectedFile.name.toLowerCase().endsWith('.pdf')

    ) {

      setError(t.errorFile)

      e.target.value = ''

      setFile(null)

      return

    }



    if (selectedFile.size > 5 * 1024 * 1024) {

      setError(t.errorSize)

      e.target.value = ''

      setFile(null)

      return

    }



    setError('')

    setFile(selectedFile)

    setExperience('')

  }



  function removeFile() {

    setFile(null)



    if (fileInputRef.current) {

      fileInputRef.current.value = ''

    }

  }



  return (

    <main className="container">



      <header className="hero-header">

        <div className="brand-mark">SB</div>

        <h1>SkillBridge AI</h1>

        <p>{t.subtitle}</p>

      </header>



      <section className="form-section">

        <h2>{t.formTitle}</h2>



        <form onSubmit={analyzeProfile}>



          <label htmlFor="cv">{t.upload}</label>



          <div className="upload-area">

            <input

              ref={fileInputRef}

              id="cv"

              type="file"

              accept=".pdf,application/pdf"

              onChange={handleFileChange}

            />



            <p className="form-hint">{t.fileHint}</p>



            {file && (

              <div className="file-info">

                <span className="file-icon">PDF</span>

                <span className="file-name">{file.name}</span>

                <button

                  type="button"

                  className="remove-button"

                  onClick={removeFile}

                >

                  {t.remove}

                </button>

              </div>

            )}

          </div>



          <div className="separator">

            <span>{t.or}</span>

          </div>



          <label htmlFor="experience">{t.experience}</label>



          <textarea

            id="experience"

            value={experience}

            onChange={(e) => {

              setExperience(e.target.value)

              if (e.target.value.trim()) removeFile()

            }}

            placeholder={t.placeholder}

            rows={7}

          />



          <label htmlFor="language">{t.language}</label>



          <select

            id="language"

            value={language}

            onChange={(e) => setLanguage(e.target.value)}

          >

            <option value="English">English</option>

            <option value="Français">Français</option>

            <option value="Deutsch">Deutsch</option>

            <option value="Українська">Українська</option>

          </select>



          <button

            type="submit"

            className="primary-button"

            disabled={loading || (!file && !experience.trim())}

          >

            {loading ? t.analyzing : t.analyze}

          </button>

        </form>



        {error && (

          <div className="error-message" role="alert">

            {t.errorTitle}: {error}

          </div>

        )}

      </section>



      {result && (

        <section className="results">



          <div className="results-heading">

            <div>

              <span className="eyebrow">SKILLBRIDGE AI</span>

              <h2>{t.profile}</h2>

            </div>

            <span className="source-badge">

              {t.source}: {file ? t.pdf : t.text}

            </span>

          </div>



          <div className="summary-card">

            <p>{result.professional_summary}</p>

          </div>



          <h3>{t.identified}</h3>



          {result.skills.length > 0 ? (

            <div className="skills">

              {result.skills.map((skill) => (

                <span className="skill-tag" key={skill}>

                  <span className="skill-check">✓</span>

                  {skill}

                </span>

              ))}

            </div>

          ) : (

            <p className="empty-state">{t.empty}</p>

          )}



          <div className="section-heading">

            <h3>{t.matches}</h3>

            <span className="result-count">

              {result.job_matches.length}

            </span>

          </div>
          {result.job_matches.length > 0 && (
            <div className="career-explorer">
              <div className="career-explorer-copy">
                <span className="eyebrow">CAREER EXPLORER</span>
                <h3>{t.targetRole}</h3>
                <p>{t.chooseRole}</p>
              </div>
              <select
                className="career-select"
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                aria-label={t.targetRole}
              >
                {result.job_matches.map((job) => (
                  <option key={job.title} value={job.title}>{job.title}</option>
                ))}
              </select>
              {(() => {
                const selected = result.job_matches.find((job) => job.title === selectedJob)
                return selected ? (
                  <div className="selected-role-panel">
                    <div className="selected-role-topline">
                      <span>{t.selectedDirection}</span>
                      <strong>{selected.match_score}%</strong>
                    </div>
                    <h4>{selected.title}</h4>
                    <div className="progress selected-progress" role="progressbar" aria-valuenow={selected.match_score} aria-valuemin="0" aria-valuemax="100" aria-label={`${selected.title} match`}>
                      <div style={{ width: `${selected.match_score}%` }} />
                    </div>
                    <strong className="focus-title">{t.focusSkills}</strong>
                    <div className="skill-list focus-skill-list">
                      {selected.missing_skills.length > 0 ? selected.missing_skills.map((skill) => (
                        <span className="missing-tag" key={skill}>+ {skill}</span>
                      )) : <span className="all-skills-match">✓ {t.selected}</span>}
                    </div>
                  </div>
                ) : null
              })()}
            </div>
          )}




          {result.job_matches.length > 0 ? (

            result.job_matches.map((job, index) => (

              <article className={`job-card ${selectedJob === job.title ? 'is-selected' : ''}`} key={job.title}>



                <div className="job-header">

                  <div className="job-title-group">

                    <span className="job-number">

                      {String(index + 1).padStart(2, '0')}

                    </span>

                    <h4>{job.title}</h4>

                  </div>



                  <strong className="match-score">

                    {job.match_score}%

                  </strong>

                </div>

                <button
                  type="button"
                  className={`select-role-button ${selectedJob === job.title ? 'is-selected' : ''}`}
                  onClick={() => setSelectedJob(job.title)}
                >
                  {selectedJob === job.title ? `✓ ${t.selected}` : t.chooseThisRole}
                </button>



                <div

                  className="progress"

                  role="progressbar"

                  aria-valuenow={job.match_score}

                  aria-valuemin="0"

                  aria-valuemax="100"

                  aria-label={`${job.title} match`}

                >

                  <div

                    style={{ width: `${job.match_score}%` }}

                  />

                </div>



                <div className="why-match">

                  <strong>{t.why}</strong>

                  <p>{t.whyText(job.matched_skills.length)}</p>

                  {job.missing_skills.length > 0 && (

                    <p>{t.gapText(job.missing_skills.length)}</p>

                  )}

                </div>



                <div className="job-skills">

                  <div className="skill-group">

                    <h5>{t.matching}</h5>

                    <div className="skill-list">

                      {job.matched_skills.length > 0 ? (

                        job.matched_skills.map((skill) => (

                          <span className="matched-tag" key={skill}>

                            ✓ {skill}

                          </span>

                        ))

                      ) : (

                        <span>—</span>

                      )}

                    </div>

                  </div>



                  {job.missing_skills.length > 0 && (

                    <div className="skill-group">

                      <h5>{t.missing}</h5>

                      <div className="skill-list">

                        {job.missing_skills.map((skill) => (

                          <span className="missing-tag" key={skill}>

                            + {skill}

                          </span>

                        ))}

                      </div>

                    </div>

                  )}

                </div>



              </article>

            ))

          ) : (

            <p className="empty-state">{t.noMatches}</p>

          )}



          <div className="recommendations">

            <h3>{t.recommendations}</h3>

            <ol>

              {result.recommendations.map((item, index) => (

                <li key={index}>

                  <span className="recommendation-number">

                    {index + 1}

                  </span>

                  <span>{item}</span>

                </li>

              ))}

            </ol>

          </div>



        </section>

      )}



      <footer className="app-footer">

        SkillBridge AI · Connecting skills with opportunities

      </footer>



    </main>

  )

}



export default App
