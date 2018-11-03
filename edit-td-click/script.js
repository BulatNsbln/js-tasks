class EditerTd{
    constructor(elem) {
        this._elem = elem;
        this._elem.onclick = event => this._startEdit(event);
    }
    _startEdit(event) {
        this._target = event.target;

        if(document.body.querySelectorAll('button').length > 0) return;

        while(this._target != document.body) {
            if(this._target.tagName == 'TD') {
                this._addArea();
                this._createButtonOk();
                this._createButtonCancel();
                return;
            };
            
            this._target = this._target.parentNode;
        }
        
    }
    _addArea() {
        this._area = document.createElement('textarea');
        this._area.value = this._target.innerHTML;
        document.body.appendChild(this._area);
        

        this._areaPosition(this._area);
        this._area.focus();
    }
    _areaPosition(area) {
        this._coords = this._target.getBoundingClientRect();

        area.style.left = this._coords.left + 'px';
        area.style.top = this._coords.top + 'px';
        area.style.height = this._coords.height - 5 + 'px';
        area.style.width = this._coords.width - 5 + 'px';  
    }
    _createButtonOk() {
        this._buttonOk = document.createElement('button');
        this._buttonOk.innerHTML = 'OK';
        document.body.appendChild(this._buttonOk);

        this._buttonOk.style.top = this._coords.bottom + 'px';
        this._buttonOk.style.left = this._coords.right - (this._coords.width / 2) - 60 + 'px';

        this._buttonOk.onclick = () => this._clickButtonOk();
    }
    _createButtonCancel() {
        this._buttonCancel = document.createElement('button');
        this._buttonCancel.innerHTML = 'CANCEL';
        document.body.appendChild(this._buttonCancel);

        this._buttonCancel.style.top = this._coords.bottom + 'px';
        this._buttonCancel.style.left = this._coords.left + (this._coords.width / 2) + 'px';

        this._buttonCancel.onclick = () => this._clickButtonCancel();
    }
    _clickButtonOk() {
        this._target.style.hidden = 'false';
        this._area.style.display = 'none';
        this._target.innerHTML = this._area.value;

        this._buttonOk.remove();
        this._buttonCancel.remove();
    }
    _clickButtonCancel() {
        this._target.style.hidden = 'false';
        this._area.style.display = 'none';

        this._buttonOk.remove();
        this._buttonCancel.remove();
    }
};

let table = document.getElementById('bagua-table');
new EditerTd(table);