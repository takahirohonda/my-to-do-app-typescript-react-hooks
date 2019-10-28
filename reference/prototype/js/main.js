document.addEventListener('DOMContentLoaded', () => {

  // Add click event listeners
  document.body.addEventListener('click', event => {

    if (event.target.closest('.header-right') !== null) {
      mtd.public.addActive('.right-nav-menu');
      mtd.public.addActive('.nav-menu-background');
    } 
    
    if (event.target.closest('.nav-burger-container') !== null) {
      mtd.public.addActive('.left-nav-menu');
      mtd.public.addActive('.nav-menu-background');
    }

    if (event.target.closest('.nav-menu-background') !== null) {
      mtd.public.removeActive('.right-nav-menu');
      mtd.public.removeActive('.left-nav-menu');
      mtd.public.removeActive('.nav-menu-background');
      mtd.public.removeActive('.details-right-nav-menu');
      mtd.public.removeActive('.sort-right-nav-menu');
      mtd.public.removeActive('.delete-category-form-container');
      mtd.public.removeActive('.add-category-form-container');
      mtd.public.removeActive('.delete-confirm-form-container-details')
    }

    if (event.target.closest('.to-do-summary-circle') !== null) {
      location.href = "edittodo.html";
    }

    // main page form popup

    if (event.target.closest('#add-category-btn') !== null) {
      mtd.public.addActive('.add-category-form-container');
      mtd.public.removeActive('.right-nav-menu')
      document.querySelector('#category').focus();
    }

    if (event.target.closest('#delete-category-btn') !== null) {
      mtd.public.addActive('.delete-category-form-container');
      mtd.public.removeActive('.right-nav-menu')
    }

    if (event.target.closest('.submit-button')) {
      mtd.public.removeActive('.delete-category-form-container');
      mtd.public.removeActive('.add-category-form-container');
      mtd.public.removeActive('.nav-menu-background');
      mtd.public.removeActive('.delete-confirm-form-container');
    }

    if (event.target.closest('.submit-list-btn')) {
      mtd.public.addActive('.nav-menu-background');
    }

    if (event.target.closest('.cancel-list-btn')) {
      mtd.public.addActive('.nav-menu-background');
    }

    if (event.target.closest('.cancel-button')) {
      mtd.public.removeActive('.delete-category-form-container');
      mtd.public.removeActive('.add-category-form-container');
      mtd.public.removeActive('.nav-menu-background');
      mtd.public.removeActive('.delete-confirm-form-container');
    }

    if (event.target.closest('#add-list-btn') !== null) {
      mtd.public.addActive('.add-list-form-container');
      mtd.public.addActive('.add-list-form-container-background');
    }

    if (event.target.closest('.submit-list-btn') !== null) {
      mtd.public.removeActive('.add-list-form-container');
      mtd.public.removeActive('.add-list-form-container-background');
    }

    if (event.target.closest('.cancel-list-btn') !== null) {
      mtd.public.removeActive('.add-list-form-container');
      mtd.public.removeActive('.add-list-form-container-background');
    }

    if (event.target.closest('.add-list-form-container-background') !== null) {
      mtd.public.removeActive('.add-list-form-container');
      mtd.public.removeActive('.delete-confirm-form-container')
      mtd.public.removeActive('.add-list-form-container-background');
    }

    // delete button
    if (event.target.closest('.mtd-list-remove-btn') !== null) {
      mtd.public.addActive('.delete-confirm-form-container')
      mtd.public.addActive('.add-list-form-container-background')
    }

    // details page
    if (event.target.closest('.add-icon') !== null) {
      mtd.public.addActive('.add-task-container');
      document.querySelector('.task-input-field').focus();
    }

    if (event.target.closest('.back-to-details') !== null) {
      mtd.public.removeActive('.add-task-container');
    }

    if (event.target.closest('.ellipsis-v-icon') !== null) {
      mtd.public.addActive('.details-right-nav-menu');
      mtd.public.addActive('.nav-menu-background');
    }

    if (event.target.closest('.sort-icon') !== null) {
      mtd.public.addActive('.sort-right-nav-menu');
      mtd.public.addActive('.nav-menu-background');
    }

    if (event.target.closest('.back-to-summary') !== null) {
      location.href = "index.html";
    }

    if (event.target.closest('.item-inner-container') !== null) {
      mtd.public.addActive('.edit-task-container');
      document.querySelector('.task-input-field').focus() ;
    }

    if (event.target.closest('.back-to-details-from-edit') !== null) {
      mtd.public.removeActive('.edit-task-container');
    }

    if (event.target.closest('.task-input-save-tick') !== null) {
      mtd.public.removeActive('.edit-task-container');
      mtd.public.removeActive('.add-task-container');
    }

    if (event.target.closest('.trash-icon') !== null) {
      mtd.public.removeActive('.edit-task-container');
      mtd.public.removeActive('.add-task-container');
    }

    if (event.target.closest('.details-delete-all-btn') !== null) {
      mtd.public.addActive('.delete-confirm-form-container-details');
    }

    if (event.target.closest('.delete-all-confirm-btn') !== null) {
      mtd.public.removeActive('.nav-menu-background');
      mtd.public.removeActive('.delete-confirm-form-container-details');
      mtd.public.removeActive('.details-right-nav-menu');
    }

    if (event.target.closest('.delete-all-cancel-btn') !== null) {
      mtd.public.removeActive('.nav-menu-background');
      mtd.public.removeActive('.delete-confirm-form-container-details');
      mtd.public.removeActive('.details-right-nav-menu');
    }

  });
});