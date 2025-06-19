document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.tgt');
    const params = new URLSearchParams(window.location.search);
    const project = params.get('project') || '';

    const returnBtn = `<div class="text-center my-4"><a href="../projects.html" class="btn btn-secondary">← Back to Projects</a></div>`;

    if (!project) {
        container.innerHTML = '<div class="container text-center mt-4"><p class="text-danger">Error: no project specified.</p></div>';
        container.innerHTML += returnBtn;
        return;
    }
    const slug = project.replace(/[^a-zA-Z0-9_-]/g, '');
    const url = `projects/${slug}/${slug}.html`;
    fetch(url)
    .then(res => {
        if (!res.ok) throw new Error();
        return res.text();
    })
    .then(html => container.innerHTML = html)
    .catch(() => {
        container.innerHTML = `<div class="container text-center mt-4"><p class="text-danger">Project description for “${slug}” not found.</p></div>`;
        container.innerHTML += returnBtn;
    });
});