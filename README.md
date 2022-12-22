# Whereabouts Server

A serverless function that can run [**whereabouts**](https://github.com/cicada-lang/whereabouts) code.

## Usage

Run a file:

```bash
curl https://wa.cic.run --data-binary @<file>
```

Run multiline text (bash and zsh):

```bash
curl https://wa.cic.run --data-binary @-<< END

Whereabouts("unknown")

find q {
  Whereabouts(q)
}

END
```

## Contributions

To make a contribution, fork this project and create a pull request.

Please read the [STYLE-GUIDE.md](STYLE-GUIDE.md) before you change the code.

Remember to add yourself to [AUTHORS](AUTHORS).
Your line belongs to you, you can write a little
introduction to yourself but not too long.

It is assumed that all non draft PRs are ready to be merged.
If your PR is not ready to be merged yet, please make it a draft PR:

- [Creating draft PR](https://github.blog/2019-02-14-introducing-draft-pull-requests)
- [Changing a PR to draft](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)

During the development of your PR, you can make use of
the [TODO.md](TODO.md) file to record ideas temporarily,
and this file should be clean again at the end of your development.

## License

[GPLv3](LICENSE)
