1. Нужно заменить тег `<textarea>` на это:
```html
<div class="textarea-wrap">
	<textarea class="panel-textarea" style="resize: none;" type="text"
		placeholder="Добавить комментарий"></textarea>

	<button class="chat__sub">
		<img src="./btn.png" alt=""> <!-- путь указываем свой, до кнопки-->
	</button>
</div>
```

в ситили добавить это

```css
.panel {
		position: relative;
	}

	.textarea-wrap {
		position: relative;
		width: 100%;
	}

	.textarea-wrap textarea {
		width: 100%;
    padding-right: 55px;
	}

	.chat__sub {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		height: 100%;

		width: 40px;
		height: 40px;
	}

	.chat__sub img {
		width: 100%;
		height: auto;
	}
```