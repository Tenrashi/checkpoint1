## Qu'est ce qu’un navigateur ?

```
Un navigateur est un logiciel permettant d'acceder au web.



```

________________________________________________________________________________________

## Définissez l’ensemble HTML/CSS/JavaScript et leur utilités.


```
Le html sert à construire la structure d'un site, le css sa mise en forme et le JavaScript lui,
est un véritable langage qui permet de dynamiser un site entre autre.



```
________________________________________________________________________________________


## Qu’est-ce qu’un élément HTML ? Un attribut ?

```
Un élément html prend la forme de balises qui vont constituer le site, on peut donner des détails
à l'intérieur de ces balises, des indications; ce sont les attributs.



```
________________________________________________________________________________________


## Dans quels cas utilisez-vous des id au lieu des classes (et vice-versa) ?


```
Les id sont uniques, pas les classes.



```
________________________________________________________________________________________


## Qu’est-ce que EcmaScript ?

```
EcmaScript est une norme pour la compatibilité du code sur les navigateurs selon les versions.



```

________________________________________________________________________________________

## Pourquoi est-il important de bien indenter vos fichiers ?

```
Pour la beauté du code.
(et pour la SEO)


```
________________________________________________________________________________________


## Quelle est la différence entre margin et padding ? 

```
Le margin est la marge extérieure et le padding la marge intérieure.



```

________________________________________________________________________________________


## Citez au moins 3 types de positionnement en CSS et expliquer leurs rôles.

```
align: aligner;
center: centrer;
float left/right: faire flotter à gauche ou à droite

```
________________________________________________________________________________________

## Qu’est-ce qu’une variable ?

```
Une variable est une chaine de caractères dans qui prend une valeur afin de permettre de l'utiliser
dans son code.

```
________________________________________________________________________________________


## Citez le plus de types JavaScript possible et définissez les rapidement.


```
string: chaîne;
object: objet;
number: nombre;

C'est certes de la traduction mais les noms des types sont plutôt explicites.

```
________________________________________________________________________________________


##  À quoi sert le mot-clef “if” ?

```
Le mot-clef “if” sert à insérer une condition.



```

________________________________________________________________________________________

##  Définissez l’objet XHR en JavaScript, son abréviation. À quoi sert-il ?


```
L'objet xhr sert à envoyer des requêtes, c'est ce qu'on utilise pour les call d'api.



```

________________________________________________________________________________________

## Qu’est-ce qu’une requête HTTP ? 

```
Les requêtes http désignent les interactions avec les serveurs web.



```
________________________________________________________________________________________


## Quelle sont les deux types de requêtes permettant de récupérer et d’envoyer de la donnée sur un serveur HTTP ?

```
La requête get permet de récupérer des données et pour en envoyer je ne sais plus, send?



```

________________________________________________________________________________________

## À quoi sert le Header d’une requête ? Le “Content-Type” ?

```
A donner des indications pour que la requête soit interprêtée correctement.



```
________________________________________________________________________________________


## Donnez au moins 3 codes de réponse HTTP et définissez les.


```
404: le serveur ne répond pas.
202: tout va bien.
301: redirection.

```
________________________________________________________________________________________


## Définissez les rôles de Scrum Master et Product Owner.


```
Le ScrumMaster sert à vérifier l'application des bonnes pratiques du Scrum.
Le product owner est chargé de l'échange avec le client.

```
________________________________________________________________________________________


## Citer 4 commandes utilisées avec GIT et expliquer leurs rôles.
```
git init: initialiser un dépot.
git checkout *branche* : se déplacer sur la branche.
git merge *branche* : fusionner la branche ciblée avec la branche actuelle.
git pull: comprend un git fetsh qui récupère le delta entre le dépot distant et local
et un git merge.

```
________________________________________________________________________________________


## Expliquer le code suivant et indiquer le résultat retourné par la fonction.

```
function counter(){
        const sentence = "Validation de la première phase";
        const words = sentence.split(' ');
        let count = 0;


        for (let i = 0; i < words.length; i++) {
            var word = words[i];
            count += word.length;
        }
        return count;
}
```
```
Fonction compteur,
Déclaration de: 
	-deux constantes, une contenant du texte et l'autre une fonction;
	-une variable qui prend la valeur zéro;
Appel d'une boucle "for" qui définit que pour i inférieur à la longueur de la chaîne de caractères,
i prend la valeur +1 en partant de 0.
On déclare une nouvelle variable en utilisant "var" au lieu de "let" (ne le faites pas à la maison).
Cette dernière prend la valeur de la constante words appliquée à "i" pour transformer la chaine de
caractères en tableau;
On ajoute le coeur du compteur. 
On retourne la valeur que count prendra à la fin de la boucle.
Cette fonction retournera le nombre de mots dans la phrase.

```
________________________________________________________________________________________


## Algo 

Ecrire l’algorithme d’une fonction prenant en paramètre 2 arguments : le premier est une chaîne de caractère et le second correspondant au caractère recherché. Cette fonction retourne le nombre de fois que le caractère recherché est rencontré dans la chaîne de caractères.
Ex. 
   * chaîne : ‘examen’, caractère : ‘x’ => 1
   * chaîne : ‘wild code school’, caractère : ‘w’ => 1



```
	function wordcount(let chaine="Je mange des oranges oranges chez orange",orange) {
	return (chaine.match(new RegExp(orange/i)).length);
}

// Pas convaincu que ça fonctionne mais j'ai déjà passé trop de temps là dessus. 

```


