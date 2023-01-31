function clusterOrganisation(authors) {
  return authors.reduce((authors, author) => {
    if (!authors[author.year]) {
      authors[author.year] = {}
    }

    if (!authors[author.year][author.organisation]) {
      authors[author.year][author.organisation] = {}
    }

    if (!authors[author.year][author.organisation][author.group]) {
      authors[author.year][author.organisation][author.group] = []
    }

    authors[author.year][author.organisation][author.group].push({
      name: author.name,
      nickname: author.nickname,
    })

    return authors
  }, {})
}

export default function renderAuthors(authors) {
  const clustered = clusterOrganisation(
    authors.map(auth => ({
      organisation: '',
      nickname: '',
      name: '',
      group: '',
      year: '',
      ...auth,
    }))
  )

  return Object.keys(clustered).map(
    year =>
      Object.keys(clustered[year])
        .map(
          org =>
            Object.keys(clustered[year][org])
              .map(
                group =>
                  clustered[year][org][group]
                    .map(author =>
                      author.nickname
                        ? author.nickname +
                          (author.name ? ' (' + author.name + ')' : '')
                        : author.name
                    )
                    .join(' & ') + (group ? ', ' + group : '')
              )
              .join(', ') + (org ? ', ' + org : '')
        )
        .join(', ') + (year ? ', ' + year : '')
  )
}
