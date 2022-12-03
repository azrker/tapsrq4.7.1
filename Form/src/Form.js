import React, { Component } from "react";

export default class Form extends Component {
    isClicked = () => {
        alert('Müvəffəqiyyətlə göndərildi)')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.isClicked}>
                    <label>Ad:
                        <input type='text' required></input>
                    </label>
                    <label>Soyad:
                        <input type='text' required></input>
                    </label>
                    <label>Telefon:
                        <input type='number' required></input>
                    </label>
                    <label>E-mail:
                        <input type='mail' required></input>
                    </label>
                    <label>Şərh:
                        <textarea rows='5' cols='22'></textarea>
                    </label>
                    <button type="submit">Göndər</button>
                </form>
            </div>
        )
    }
}