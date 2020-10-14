$(function() {
    $('#contactForm').submit(function() {
        let $nameForm = $('#nameForm');
        let $emailForm = $('#emailForm');
        let $bodyForm = $('#bodyForm');
        if ( !$nameForm.val() || !$emailForm.val() || !$bodyForm.val()) {
            alert('必須入力項目を全て入力してください');
            return false;
        }
    });

    $('#nameForm').change(function() {
        if( $(this).val().length > 20 ) {
            alert('お名前は20文字以内で入力してください');
            $(this).val('');
            return false;
        }
    });
});